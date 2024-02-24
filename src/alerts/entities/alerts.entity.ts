import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AccountsAlerts } from './accounts-alerts.entity';

@Entity()
export class Alerts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  formula: string;

  @Column()
  text: string;

  @OneToMany(() => AccountsAlerts, (accounts) => accounts.alert)
  accounts: AccountsAlerts[];
}
