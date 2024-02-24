import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advices } from './entities/advice.entity';
import { AccountsAdvices } from './entities/accounts-advice.entity';

@Injectable()
export class AdviceService {
  constructor(
    @InjectRepository(Advices)
    private readonly adviceRepository: Repository<Advices>,
    @InjectRepository(AccountsAdvices)
    private accountAdviceRepository: Repository<AccountsAdvices>,
  ) {}

  async getAllAdvices(): Promise<Advices[]> {
    const results = await this.adviceRepository.find({
      relations: ['accounts'], // Ajout des relations
    });
    if (!results) {
      throw new NotFoundException('Une erreur est survenue');
    }
    return results;
  }

  async updateAdvice(id: number): Promise<void> {
    const result = await this.accountAdviceRepository.manager.query(
      "UPDATE accounts_advices SET status = 'Old' WHERE id_advice = $1",
      [id],
    );
    if (!result) {
      throw new NotFoundException('Une erreur est survenue');
    }
  }
}
