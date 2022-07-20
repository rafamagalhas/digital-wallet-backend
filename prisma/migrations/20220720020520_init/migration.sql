-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "card_number" VARCHAR NOT NULL,
    "card_password" VARCHAR NOT NULL,
    "card_user_name" VARCHAR NOT NULL,
    "card_expire_date" VARCHAR NOT NULL,

    CONSTRAINT "cards_pk" PRIMARY KEY ("id")
);
