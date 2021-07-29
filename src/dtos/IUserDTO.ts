import { ObjectId } from 'mongodb';

export interface IUserDTO {
  userId?: ObjectId;
  name: string;
  email: string;
  password: string;
  cpf: string;
}
