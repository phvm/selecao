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
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Response } from 'express';
import { UpdateStudentDto } from './dto/update-student.dto';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() studentDto: CreateStudentDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.CREATED)
        .send(await this.studentService.create(studentDto));
    } catch (error) {}
  }

  @Get()
  async findAll(@Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.studentService.findAll());
    } catch (error) {}
  }

  @Get('/request/:user')
  async findStudentRequests(@Param('user') user: string, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.studentService.findStudentRequests(user));
    } catch (error) {}
  }

  @Get(':user')
  async findOneByUser(@Param('user') user: string, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.studentService.findOneByUser(user));
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Put()
  async update(@Body() studentDto: UpdateStudentDto, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.studentService.update(studentDto));
    } catch (error) {}
  }

  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    try {
      return res
        .status(HttpStatus.OK)
        .send(await this.studentService.delete(id));
    } catch (error) {}
  }
}
