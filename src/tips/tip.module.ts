import { Module } from '@nestjs/common';
import { TipsService } from './tip.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tips } from './entities/tip.entity';
import { AccountsTips } from './entities/accounts-tip.entity';
import { TipsController } from './tip.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tips, AccountsTips])],
  controllers: [TipsController],
  providers: [TipsService],
})
export class TipsModule {}
