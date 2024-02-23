import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'commons/config';
import { ConfigModule } from '@nestjs/config';
import { Alerts } from 'src/alerts/alerts.entity';
import { AccountsAlerts } from 'src/alerts/accounts-alerts.entity';
import { AlertsModule } from 'src/alerts/alerts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'mosily',
      password: 'mosily',
      database: 'mosily',
      entities: [Alerts, AccountsAlerts],
    }),
    AlertsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
