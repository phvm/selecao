import { Injectable } from '@nestjs/common';
import { UpdateStudentDto } from './dto/update-student.dto';
import { CreateStudentDto } from './dto/create-student.dto';
import { AppDataSource } from 'src/app.datasource';
import { Student } from './entities/student.entity';

@Injectable()
export class StudentService {
  private async checkExistingStudent(user: string) {
    return await AppDataSource.getRepository(Student).findOneBy({
      user: user,
    });
  }
  async create(studentDto: CreateStudentDto) {
    const existingSector = await this.checkExistingStudent(studentDto.user);
    if (existingSector) {
      throw Error('Student already exists');
    }
    const student = new Student();
    student.user = studentDto.user;

    return await AppDataSource.getRepository(Student).save(student);
  }

  async findOne(id: number) {
    const student = await AppDataSource.getRepository(Student).findOneBy({
      id: id,
    });
    if (!student) {
      throw Error('Student was not found');
    }
    return student;
  }

  async findOneByUser(user: string) {
    const student = await AppDataSource.getRepository(Student).findOneBy({
      user: user,
    });
    if (!student) {
      throw Error('Student was not found');
    }
    return student;
  }

  async findStudentRequests(user: string) {
    const student = await AppDataSource.getRepository(Student).findOneBy({
      user: user,
    });
    if (!student) {
      throw Error('Student was not found');
    }
    return student.request;
  }

  async findAll() {
    const students = await AppDataSource.getRepository(Student).find();
    return students;
  }

  async update(studentDto: UpdateStudentDto) {
    const student = await AppDataSource.getRepository(Student).findOneBy({
      id: studentDto.id,
    });
    if (!student) {
      throw Error('Student does not exist');
    }
    student.user = studentDto.user;
    return await AppDataSource.getRepository(Student).save(student);
  }

  async delete(id: number) {
    const deletedStudent =
      await AppDataSource.getRepository(Student).delete(id);
    if (deletedStudent.affected === 0) {
      throw Error('Student does not exist');
    }
    return deletedStudent;
  }
}
