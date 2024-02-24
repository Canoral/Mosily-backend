// accounts-advice.entity.ts

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Advices } from './advice.entity';

@Entity()
export class AccountsAdvices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  id_account: number;

  @ManyToOne(() => Advices)
  @JoinColumn({ name: 'id_advice' }) // Spécifie le nom de la colonne de clé étrangère
  advice: Advices;

  @Column()
  status: string;
}
