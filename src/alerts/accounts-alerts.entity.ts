// accounts-alerts.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Alerts } from './alerts.entity';

@Entity()
export class AccountsAlerts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_account: number;

  @ManyToOne(() => Alerts, (alerts) => alerts.accountsAlerts)
  alert: Alerts;

  @Column()
  status: string;
}
