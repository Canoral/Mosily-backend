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
  advice_formula: string;
  @Column()
  advice_text: string;

  @OneToMany(() => AccountsAdvices, (accountsAdvice) => accountsAdvice.advice)
  accountsAdvice: AccountsAdvices[];
}
