import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './app.datasource';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppDataSource.initialize()
    .then(() => {
      console.log('Data Source has been initialized!');
    })
    .catch((err) => {
      console.error('Error during Data Source initialization', err);
    });

  app.enableCors({
    origin: 'http://localhost:5173',
  });
  await app.listen(3000);
}
bootstrap();
