import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Alerts } from './alerts.entity';

@Entity()
export class AccountsAlerts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_account: number;

  @ManyToOne(() => Alerts, (alerts) => alerts.accountsAlerts)
  @JoinColumn({ name: 'id_alert' })
  alert: Alerts;

  @Column()
  status: string;
}
