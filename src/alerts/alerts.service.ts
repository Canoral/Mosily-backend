import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alerts } from './alerts.entity';
import { AccountsAlerts } from './accounts-alerts.entity';

@Injectable()
export class AlertsService {
  constructor(
    @InjectRepository(Alerts)
    private readonly alertsRepository: Repository<Alerts>,
    @InjectRepository(AccountsAlerts)
    private accountAlertsRepository: Repository<AccountsAlerts>,
  ) {}

  async getAllAlerts(): Promise<Alerts[]> {
    const results = await this.alertsRepository.find({
      relations: ['accountsAlerts'], // Ajout des relations
    });
    if (!results) {
      throw new NotFoundException('Une erreur est survenue');
    }
    return results;
  }
}
