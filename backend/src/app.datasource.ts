import { DataSource } from 'typeorm';
import { Sector } from './sector/entities/sector.entity';
import { Student } from './student/entities/student.entity';
import { Request } from './request/entities/request.entity';
import { RequestType } from './request/entities/requestType.entity';
import { CreateSector1696188272101 } from './database/migrations/1696188272101-CreateSector';
import { CreateStudent1696188393378 } from './database/migrations/1696188393378-CreateStudent';
import { CreateRequestType1696188531746 } from './database/migrations/1696188531746-CreateRequestType';
import { CreateRequest1696188604832 } from './database/migrations/1696188604832-CreateRequest';
import { SeedsSector1696190003288 } from './database/seeds/1696190003288-SeedsSector';
import { SeedsRequestType1696190287270 } from './database/seeds/1696190287270-SeedsRequestType';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'mysql',
  password: 'mysql',
  database: 'selecao',
  synchronize: true,
  logging: false,
  entities: [Sector, Student, Request, RequestType],
  migrations: [
    CreateSector1696188272101,
    CreateStudent1696188393378,
    CreateRequestType1696188531746,
    CreateRequest1696188604832,
    SeedsSector1696190003288,
    SeedsRequestType1696190287270,
  ],
});
