import { PrismaClient } from '@prisma/client';
import { Chance } from 'chance';

const client = new PrismaClient();
const chance = new Chance();

async function seeds() {
  for (let i = 0; i < 1000; i++) {
    await client.card.create({
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
