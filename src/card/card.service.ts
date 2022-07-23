import { PrismaService } from './../prisma.service';
import { Injectable } from '@nestjs/common';
import { Card } from '@prisma/client';

@Injectable()
export class CardService {
  constructor(private prisma: PrismaService) {}

  async findCard(cardNumber: string): Promise<Card | null> {
    const card = await this.prisma.card.findFirst({
      where: {
        card_number: cardNumber,
      },
      include: {
        cardBalance: {
          orderBy: {
            balance_date: 'desc',
          },
        },
      },
    });
    return card;
  }
}
