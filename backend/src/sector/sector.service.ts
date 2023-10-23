import { Injectable } from '@nestjs/common';
import { UpdateSectorDto } from './dto/update-sector.dto';
import { CreateSectorDto } from './dto/create-sector.dto';
import { AppDataSource } from 'src/app.datasource';
import { Sector } from './entities/sector.entity';

@Injectable()
export class SectorService {
  private async checkExistingSector(name: string) {
    return await AppDataSource.getRepository(Sector).findOneBy({
      name: name,
    });
  }
  async create(sectorDto: CreateSectorDto) {
    const existingSector = await this.checkExistingSector(sectorDto.name);
    if (existingSector) {
      throw Error('Sector already exists');
    }
    const sector = new Sector();
    sector.name = sectorDto.name;

    return await AppDataSource.getRepository(Sector).save(sector);
  }

  async findOne(id: number) {
    const sector = await AppDataSource.getRepository(Sector).findOneBy({
      id: id,
    });
    if (!sector) {
      throw Error('Sector was not found');
    }
    return sector;
  }

  async findAll() {
    const sectors = await AppDataSource.getRepository(Sector).find();
    return sectors;
  }

  async update(sectorDto: UpdateSectorDto) {
    const sector = await AppDataSource.getRepository(Sector).findOneBy({
      id: sectorDto.id,
    });
    if (!sector) {
      throw Error('Sector does not exist');
    }
    sector.name = sectorDto.name;
    return await AppDataSource.getRepository(Sector).save(sector);
  }

  async delete(id: number) {
    const deletedSector = await AppDataSource.getRepository(Sector).delete(id);
    if (deletedSector.affected === 0) {
      throw Error('Sector does not exist');
    }
    return deletedSector;
  }
}
