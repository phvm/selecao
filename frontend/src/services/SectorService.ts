import api from './api';
import { AxiosResponse } from 'axios';
import { Sector } from '../types/sector';

export class SectorService {
  static async getSectors(): Promise<AxiosResponse<Sector[]>> {
    const response = await api.get('/sector');
    return response;
  }
}
