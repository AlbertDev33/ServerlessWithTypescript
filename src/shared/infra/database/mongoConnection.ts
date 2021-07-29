import { MongoClient, Db } from 'mongodb';

const MONGO_CONNECTION_TEST = 'mongodb://localhost:27017/dbTest';
const MONGO_CONNECTION_DEV = 'mongodb://localhost:27017/SAM';

let mongo: MongoClient;
const uri =
  process.env.NODE_ENV === 'test'
    ? MONGO_CONNECTION_TEST
    : MONGO_CONNECTION_DEV;

const host = uri.split('/').splice(-1)[0];
const dbName = process.env.NODE_ENV === 'test' ? 'dbTest' : host;

export const Connection = async (): Promise<Db> => {
  if (!mongo || mongo.isConnected()) {
    mongo = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      poolSize: 15,
    });
  }
  return mongo.db(dbName);
};
