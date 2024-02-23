import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alerts } from './alerts.entity';
import { AccountsAlerts } from './accounts-alerts.entity';
import { AlertsController } from './alerts.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Alerts, AccountsAlerts])],
  controllers: [AlertsController],
  providers: [AlertsService],
})
export class AlertsModule {}
