import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Alerts } from './entities/alerts.entity';
import { AccountsAlerts } from './entities/accounts-alerts.entity';

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
      relations: ['accounts'],
    });
    if (!results) {
      throw new NotFoundException('Une erreur est survenue');
    }
    return results;
  }

  async updateAlert(id: number): Promise<void> {
    const result = await this.accountAlertsRepository.manager.query(
      "UPDATE accounts_alerts SET status = 'Old' WHERE id_alert = $1",
      [id],
    );
    if (!result) {
      throw new NotFoundException('Une erreur est survenue');
    }
  }
}
