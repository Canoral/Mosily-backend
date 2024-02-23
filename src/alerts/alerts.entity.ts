import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AccountsAlerts } from './accounts-alerts.entity';

@Entity()
export class Alerts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  alert_formula: string;

  @Column()
  alert_text: string;

  @OneToMany(() => AccountsAlerts, (accountsAlerts) => accountsAlerts.alert)
  accountsAlerts: AccountsAlerts[];
}
