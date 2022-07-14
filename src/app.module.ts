import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardModule } from './card/card.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [
    CardModule,
    HealthModule,
    RouterModule.register([
      {
        path: 'api/v1',
        children: [
          {
            path: 'health',
            module: HealthModule,
          },
          {
            path: 'cards',
            module: CardModule,
          },
        ],
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
