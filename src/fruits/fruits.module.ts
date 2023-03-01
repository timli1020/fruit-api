import { Module } from '@nestjs/common';
import { FruitsController } from './fruits.controller';
import { FruitsService } from './fruits.service';

@Module({
    imports: [],
    controllers: [FruitsController],
    providers: [FruitsService],
  })
  export class FruitsModule {}
