import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tips } from './entities/tip.entity';
import { AccountsTips } from './entities/accounts-tip.entity';

@Injectable()
export class TipsService {
  constructor(
    @InjectRepository(Tips)
    private readonly tipsRepository: Repository<Tips>,
    @InjectRepository(AccountsTips)
    private accountTipsRepository: Repository<AccountsTips>,
  ) {}

  async getAllTips(): Promise<Tips[]> {
    const results = await this.tipsRepository.find({
      relations: ['accounts'], // Ajout des relations
    });
    if (!results) {
      throw new NotFoundException('Une erreur est survenue');
    }
    return results;
  }

  async updateTips(id: number): Promise<void> {
    const result = await this.accountTipsRepository.manager.query(
      "UPDATE accounts_tips SET status = 'Old' WHERE id_tip = $1",
      [id],
    );
    if (!result) {
      throw new NotFoundException('Une erreur est survenue');
    }
  }
}
