export interface ICard {
  cardNumber: number;
  cardName: string;
  expire: Date;
  active: boolean;
  cardInfo: ICardInfo;
}

interface ICardInfo {
  balance: number;
  closure: Date;
}
