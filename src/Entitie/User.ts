import { ObjectId } from 'mongodb';

export class User {
  userId?: ObjectId;
  name: string;
  email: string;
  password: string;
  cpf: string;
}
