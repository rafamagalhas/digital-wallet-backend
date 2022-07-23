import { Card } from '@prisma/client';

export function cardInfoParser(card: Card) {
  const { id, card_number, card_password, card_user_name, card_expire_date } =
    card;

  return {
    id,
    cardNumber: card_number,
    cardPassword: card_password,
    cardUsername: card_user_name,
    cardExpireDate: card_expire_date,
    cardBalance: {
      balance: card['cardBalance'][0].balance,
      balance_date: card['cardBalance'][0].balance_date,
    },
  };
}
