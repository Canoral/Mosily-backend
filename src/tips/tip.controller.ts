import { Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { Tips } from './entities/tip.entity';
import { TipsService } from './tip.service';

@Controller('tips')
export class TipsController {
  constructor(private readonly tipsService: TipsService) {}

  @Get('all')
  getAllTips(): Promise<Tips[]> {
    return this.tipsService.getAllTips();
  }

  @Put('update/:id')
  async deleteAlert(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.tipsService.updateTips(id);
  }
}
