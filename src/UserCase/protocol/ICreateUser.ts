import { IUserDTO } from 'serverlessProject/src/dtos/IUserDTO';
import { User } from 'serverlessProject/src/Entitie/User';

export interface ICreateUser {
  execute(body: IUserDTO): Promise<User>;
}
