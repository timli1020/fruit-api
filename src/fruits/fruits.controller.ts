import { Controller, Get } from '@nestjs/common';
import { FruitsService } from './fruits.service';

@Controller('api/fruits')
export class FruitsController {
    constructor(private readonly fruitService: FruitsService) {}

    @Get()
    getFruit(): string {
        return this.fruitService.getFruit();
    }
}