import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { Alerts } from './entities/alerts.entity';
import { AlertsService } from './alerts.service';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get('all')
  getAllAlerts(): Promise<Alerts[]> {
    return this.alertsService.getAllAlerts();
  }

  @Put('update/:id')
  async deleteAlert(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.alertsService.updateAlert(id);
  }
}
