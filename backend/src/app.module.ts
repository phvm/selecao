import { Module } from '@nestjs/common';
import { Sector } from './sector/entities/sector.entity';
import { Student } from './student/entities/student.entity';
import { Request } from './request/entities/request.entity';
import { RequestType } from './request/entities/requestType.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestModule } from './request/request.module';
import { SectorModule } from './sector/sector.module';
import { StudentModule } from './student/student.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreateSector1696188272101 } from './database/migrations/1696188272101-CreateSector';
import { CreateStudent1696188393378 } from './database/migrations/1696188393378-CreateStudent';
import { CreateRequestType1696188531746 } from './database/migrations/1696188531746-CreateRequestType';
import { CreateRequest1696188604832 } from './database/migrations/1696188604832-CreateRequest';

@Module({
  imports: [
    RequestModule,
    SectorModule,
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mysql',
      password: 'mysql',
      database: 'selecao',
      entities: [Sector, Student, Request, RequestType],
      migrations: [
        CreateSector1696188272101,
        CreateStudent1696188393378,
        CreateRequestType1696188531746,
        CreateRequest1696188604832,
      ],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
