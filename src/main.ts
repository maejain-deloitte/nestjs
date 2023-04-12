import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const config = new DocumentBuilder()
  .setTitle("cricket_db")
  .setDescription("the cricket db")
  .setVersion("0.1")
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}
bootstrap();