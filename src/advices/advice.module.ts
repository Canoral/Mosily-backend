import { Module } from '@nestjs/common';
import { AdviceService } from './advice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Advices } from './entities/advice.entity';
import { AccountsAdvices } from './entities/accounts-advice.entity';
import { AdviceController } from './advice.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Advices, AccountsAdvices])],
  controllers: [AdviceController],
  providers: [AdviceService],
})
export class AdviceModule {}
