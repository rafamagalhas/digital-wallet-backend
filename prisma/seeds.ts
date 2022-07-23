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

  for (let i = 0; i < 5000; i++) {
    await client.cardBalance.create({
      data: {
        card_id: chance.integer({ min: 1, max: 1000 }),
        balance: chance.floating({ min: 0, max: 500, fixed: 2 }),
        balance_date: chance.date({ year: 2022, american: false }),
      },
    });
  }
}

seeds();
