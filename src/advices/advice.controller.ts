import { Controller, Get } from '@nestjs/common';
import { Advices } from './advice.entity';
import { AdviceService } from './advice.service';

@Controller('advices')
export class AdviceController {
  constructor(private readonly adviceService: AdviceService) {}

  @Get('all')
  getAllAdvices(): Promise<Advices[]> {
    return this.adviceService.getAllAdvices();
  }
}
