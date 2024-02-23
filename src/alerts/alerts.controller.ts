import { Controller, Get } from '@nestjs/common';
import { Alerts } from './alerts.entity';
import { AlertsService } from './alerts.service';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get('all')
  getAllAlerts(): Promise<Alerts[]> {
    return this.alertsService.getAllAlerts();
  }
}
