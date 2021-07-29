// eslint-disable-next-line import/no-unresolved
import { APIGatewayEvent, Context } from 'aws-lambda';

import { IUserDTO } from '../dtos/IUserDTO';
import { User } from '../Entitie/User';
import { makeCreateUser } from './implementation';

interface IResponseFormat {
  [key: string]: string | number;
}

let response: IResponseFormat;
export const handle = async (
  event: APIGatewayEvent,
  context: Context,
): Promise<User | IResponseFormat> => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    const user = JSON.parse(event.body) as unknown as IUserDTO;
    const insertUser = await makeCreateUser().execute(user);
    response = {
      statusCode: 200,
      body: JSON.stringify(insertUser),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};
