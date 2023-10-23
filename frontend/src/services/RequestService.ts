import { AxiosResponse } from 'axios';
import { Request, RequestType } from '../types/request';
import api from './api';

export class RequestService {
  static async getRequestTypes(): Promise<AxiosResponse<RequestType[]>> {
    const response = await api.get('/request/types');
    return response;
  }

  static async createRequest(
    request: Request,
  ): Promise<AxiosResponse<Request>> {
    const response = await api.post('/request', request);
    return response;
  }

  static async updateRequest(
    request: Request,
  ): Promise<AxiosResponse<Request>> {
    const response = await api.put('/request', request);
    return response;
  }
}
