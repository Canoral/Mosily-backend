import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Tips } from './tip.entity';

@Entity()
export class AccountsTips {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_account: number;

  @ManyToOne(() => Tips)
  @JoinColumn({ name: 'id_tip' })
  tip: Tips;

  @Column({ length: 10 })
  status: string;
}
