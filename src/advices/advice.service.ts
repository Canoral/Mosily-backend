import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Advices } from './advice.entity';
import { AccountsAdvices } from './accounts-advice.entity';

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
      relations: ['accountsAdvice'], // Ajout des relations
    });
    if (!results) {
      throw new NotFoundException('Une erreur est survenue');
    }
    return results;
  }
}
