// advice.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { AccountsAdvices } from './accounts-advice.entity';

@Entity()
export class Advices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  language: string;

  @Column()
  formula: string;
  @Column()
  text: string;

  @OneToMany(() => AccountsAdvices, (accounts) => accounts.advice)
  accounts: AccountsAdvices[];
}
