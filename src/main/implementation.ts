import { MongoRepository } from '../shared/infra/repository/implementation/mongoRepository';
import { CreateUserUseCase } from '../UserCase/CreateUserUseCase';

export const makeCreateUser = (): CreateUserUseCase => {
  const mongoRepository = new MongoRepository();

  return new CreateUserUseCase(mongoRepository);
};
