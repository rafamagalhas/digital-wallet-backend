import { ICard } from './interface/card.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CardService {
  async findCard(cardNumber: number): Promise<ICard | undefined> {
    console.log(cardNumber);
    return undefined;
  }
}
