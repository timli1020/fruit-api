import { Injectable } from '@nestjs/common';
import { Fruit } from './fruits';

@Injectable()
export class FruitsService {
    private getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }

    getFruit(): any {
        const maxNumFruits = Fruit.fruits.length;
        const randFruit = Fruit.fruits[this.getRandomInt(maxNumFruits)];
        return {fruit: randFruit};
    }
}