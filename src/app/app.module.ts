import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerts } from 'src/alerts/alerts.entity';
import { AccountsAlerts } from 'src/alerts/accounts-alerts.entity';
import { AlertsModule } from 'src/alerts/alerts.module';
import { Advices } from 'src/advices/advice.entity';
import { AccountsAdvices } from 'src/advices/accounts-advice.entity';
import { AdviceModule } from 'src/advices/advice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'mosily',
      password: 'mosily',
      database: 'mosily',
      entities: [Alerts, AccountsAlerts, Advices, AccountsAdvices],
    }),
    AlertsModule,
    AdviceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
