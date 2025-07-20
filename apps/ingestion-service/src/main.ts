import { NestFactory } from '@nestjs/core';
import { IngestionServiceModule } from './ingestion-service.module';

async function bootstrap() {
  const app = await NestFactory.create(IngestionServiceModule);
  await app.listen(process.env.PORT ?? 3003);
}
bootstrap();
