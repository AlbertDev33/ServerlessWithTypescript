import { IUserDTO } from 'serverlessProject/src/dtos/IUserDTO';
import { User } from 'serverlessProject/src/Entitie/User';

export interface IMongoRepository {
  create({ userId, name, email, password, cpf }: IUserDTO): Promise<User>;
}
