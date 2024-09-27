import { DataSourceOptions } from 'typeorm';
import { User } from './src/user/entities/user.entity';
import { Topic } from 'src/user/entities/topic.entity';
import { Comment } from './src/user/entities/comment.entity';
import * as dotenv from 'dotenv';

dotenv.config();

const config: DataSourceOptions = {
  type: process.env.DB_TYPE as any,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  entities: [User, Topic, Comment],
  synchronize: true,
};

export default config;
