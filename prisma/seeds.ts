import { PrismaClient, cards } from '@prisma/client';
import { Chance } from 'chance';

const client = new PrismaClient();
const chance = new Chance();

async function seeds() {
  const card: cards = {
    id: 0,
    card_number: '',
    card_password: '',
    card_user_name: '',
    card_expire_date: '',
  };

  await client.cards.create({ data: card });

  for (let i = 0; i < 1000; i++) {
    await client.cards.create({
      data: {
        card_number: chance.cc({ type: 'discover' }),
        card_password: chance.string({
          length: 4,
          casing: 'upper',
          alpha: false,
          numeric: true,
        }),
        card_user_name: chance.name({ middle: true }),
        card_expire_date: chance.exp(),
      },
    });
  }
}

seeds();
