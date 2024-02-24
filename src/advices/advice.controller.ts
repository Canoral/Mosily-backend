import { Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { Advices } from './entities/advice.entity';
import { AdviceService } from './advice.service';

@Controller('advices')
export class AdviceController {
  constructor(private readonly adviceService: AdviceService) {}

  @Get('all')
  getAllAdvices(): Promise<Advices[]> {
    return this.adviceService.getAllAdvices();
  }
  @Put('update/:id')
  async deleteAlert(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.adviceService.updateAdvice(id);
  }
}
