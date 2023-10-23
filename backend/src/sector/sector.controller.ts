import {
  Controller,
  Post,
  Put,
  Get,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { SectorService } from './sector.service';
import { CreateSectorDto } from './dto/create-sector.dto';
import { Response } from 'express';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Post()
  async create(@Body() sectorDto: CreateSectorDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.CREATED)
        .send(await this.sectorService.create(sectorDto));
    } catch (error) {}
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      return res.status(HttpStatus.OK).send(await this.sectorService.findAll());
    } catch (error) {}
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.sectorService.findOne(id));
    } catch (error) {}
  }

  @Put()
  async update(@Body() sectorDto: UpdateSectorDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.sectorService.update(sectorDto));
    } catch (error) {}
  }

  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.sectorService.delete(id));
    } catch (error) {}
  }
}
