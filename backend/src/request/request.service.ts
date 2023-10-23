import { Injectable } from '@nestjs/common';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { AppDataSource } from 'src/app.datasource';
import { Request } from './entities/request.entity';
import { RequestType } from './entities/requestType.entity';

@Injectable()
export class RequestService {
  async create(requestDto: CreateRequestDto) {
    const request = new Request();
    request.text = requestDto.text;
    request.requestType = await this.findOneRequestType(
      requestDto.requestTypeId,
    );
  }

  async findOne(id: number) {
    const request = await AppDataSource.getRepository(Request).findOneBy({
      id: id,
    });
    if (!request) {
      throw Error('Request not found');
    }
    return request;
  }

  async findAll() {
    const requests = await AppDataSource.getRepository(Request).find();
    return requests;
  }

  async update(requestDto: UpdateRequestDto) {
    const request = new Request();
    request.requestType = await this.findOneRequestType(
      requestDto.requestTypeId,
    );
    request.text = requestDto.text;
    request.isClosed = requestDto.isClosed;
  }

  async delete(id: number) {
    const deletedRequest =
      await AppDataSource.getRepository(Request).delete(id);
    if (deletedRequest.affected === 0) {
      throw Error('Request does not exist');
    }
  }

  async findOneRequestType(id: number) {
    const requestType = await AppDataSource.getRepository(
      RequestType,
    ).findOneBy({
      id: id,
    });
    return requestType;
  }

  async findAllRequestTypes() {
    const requestTypes = await AppDataSource.getRepository(RequestType).find();
    return requestTypes;
  }
}
