import { Module } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [AlertsService],
})
export class AlertsModule {}
