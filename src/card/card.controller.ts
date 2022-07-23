import { Controller, Get, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { cardInfoParser } from './card.parsers';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':cardNumber')
  async findOne(
    @Param('cardNumber') cardNumber: string,
    @Res() res: Response,
  ): Promise<void> {
    try {
      const cardResponse = await this.cardService.findCard(cardNumber);
      if (!cardResponse) {
        res
          .status(HttpStatus.NOT_FOUND)
          .json({ message: 'Card is not found.' });
        return;
      }
      console.log(cardResponse);
      res.status(HttpStatus.OK).json(cardInfoParser(cardResponse));
    } catch (error) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error);
    }
  }
}
