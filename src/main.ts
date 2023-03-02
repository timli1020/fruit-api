import { NestFactory } from '@nestjs/core';
import { FruitsModule } from './fruits/fruits.module';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(FruitsModule);
  await app.listen(PORT);
}
bootstrap();
