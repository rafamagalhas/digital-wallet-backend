-- CreateTable
CREATE TABLE "CardBalance" (
    "id" SERIAL NOT NULL,
    "card_id" INTEGER NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "balance_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cardbalance_pk" PRIMARY KEY ("id")
);
