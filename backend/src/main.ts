import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ credentials: true, origin: true });

  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Projeto via cep API')
    .setDescription('Projeto via cep DOCS')
    .setVersion('1.0')
    .addTag('address')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}
bootstrap();
