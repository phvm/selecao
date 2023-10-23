import { Request } from './request';

export interface Sector {
  id?: number;
  name: string;
  requests: Request[];
}
