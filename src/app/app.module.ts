import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerts } from 'src/alerts/entities/alerts.entity';
import { AccountsAlerts } from 'src/alerts/entities/accounts-alerts.entity';
import { AlertsModule } from 'src/alerts/alerts.module';
import { Advices } from 'src/advices/entities/advice.entity';
import { AccountsAdvices } from 'src/advices/entities/accounts-advice.entity';
import { AdviceModule } from 'src/advices/advice.module';
import { TipsModule } from 'src/tips/tip.module';
import { AccountsTips } from 'src/tips/entities/accounts-tip.entity';
import { Tips } from 'src/tips/entities/tip.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'mosily',
      password: 'mosily',
      database: 'mosily',
      entities: [
        Alerts,
        AccountsAlerts,
        Advices,
        AccountsAdvices,
        Tips,
        AccountsTips,
      ],
    }),
    AlertsModule,
    AdviceModule,
    TipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
