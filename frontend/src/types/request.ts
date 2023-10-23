export interface Request {
  id?: number;
  text: string;
  isClosed?: boolean;
  requestType: string;
  createdAt?: Date;
}

export interface RequestType {
  id?: number;
  type: string;
}
