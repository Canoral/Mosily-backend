import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AccountsTips } from './accounts-tip.entity';

@Entity()
export class Tips {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  formula: string;

  @Column()
  text: string;

  @OneToMany(() => AccountsTips, (accounts) => accounts.tip)
  accounts: AccountsTips[];
}
