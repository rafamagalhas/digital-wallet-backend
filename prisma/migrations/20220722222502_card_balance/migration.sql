-- AddForeignKey
ALTER TABLE "CardBalance" ADD CONSTRAINT "CardBalance_card_id_fkey" FOREIGN KEY ("card_id") REFERENCES "Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
