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
import { RequestService } from './request.service';
import { CreateRequestDto } from './dto/create-request.dto';
import { Response } from 'express';
import { UpdateRequestDto } from './dto/update-request.dto';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async create(@Body() requestDto: CreateRequestDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.CREATED)
        .send(await this.requestService.create(requestDto));
    } catch (error) {}
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.findAll());
    } catch (error) {}
  }

  @Get(':id')
  async findOne(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.findOne(id));
    } catch (error) {}
  }

  @Put()
  async update(@Body() requestDto: UpdateRequestDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.update(requestDto));
    } catch (error) {}
  }

  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.delete(id));
    } catch (error) {}
  }

  @Get('/types')
  async findAllRequestTypes(@Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.findAllRequestTypes());
    } catch (error) {}
  }

  @Get('/types/:id')
  async findOneRequestType(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.requestService.findOneRequestType(id));
    } catch (error) {}
  }
}
