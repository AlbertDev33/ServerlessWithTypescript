/* eslint-disable no-restricted-syntax */
/* eslint-disable no-underscore-dangle */

import { Db } from 'mongodb';
import { IUserDTO } from 'serverlessProject/src/dtos/IUserDTO';
import { User } from 'serverlessProject/src/Entitie/User';

import { Connection } from '../../database/mongoConnection';
import { IMongoRepository } from '../protocol/IMongoRepository';

export class MongoRepository implements IMongoRepository {
  private connect: Promise<Db>;

  constructor() {
    this.connect = Connection();
  }

  async create({
    userId,
    name,
    email,
    password,
    cpf,
  }: IUserDTO): Promise<User> {
    let user: User = { userId, name, email, password, cpf };
    const insertedUser = (await this.connect)
      .collection<User>('users')
      .insertOne({ name, email, password, cpf });

    const { ops } = await insertedUser;

    for (const userProperties of ops) {
      user = {
        userId: userProperties._id,
        name: userProperties.name,
        email: userProperties.email,
        password: userProperties.password,
        cpf: userProperties.cpf,
      };
    }
    return user;
  }
}
