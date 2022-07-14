import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { CardService } from './card.service';

@Controller()
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Get(':cardNumber')
  async findOne(
    @Param('cardNumber') cardNumber: string,
    @Res() res: Response,
  ): Promise<void> {
    console.log(cardNumber);
    res.status(HttpStatus.OK).json({
      cardNumber,
    });
  }
}
