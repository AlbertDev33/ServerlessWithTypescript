import { IUserDTO } from '../dtos/IUserDTO';
import { User } from '../Entitie/User';
import { IMongoRepository } from '../shared/infra/repository/protocol/IMongoRepository';
import { ICreateUser } from './protocol/ICreateUser';

export class CreateUserUseCase implements ICreateUser {
  constructor(private mongoRepository: IMongoRepository) {}

  public async execute(user: IUserDTO): Promise<User> {
    const createUser = await this.mongoRepository.create(user);

    return createUser;
  }
}
