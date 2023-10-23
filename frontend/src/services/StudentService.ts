import api from './api';
import { AxiosResponse } from 'axios';
import { Request } from '../types/request';
import { Student } from '../types/student';

export class StudentService {
  static async getStudentRequests(
    user: string,
  ): Promise<AxiosResponse<Request[]>> {
    const response = await api.get(`/student/request/${user}`);
    return response;
  }

  static async getStudent(user: string): Promise<AxiosResponse<Student>> {
    const response = await api.get(`/student/${user}`);
    return response;
  }
}
