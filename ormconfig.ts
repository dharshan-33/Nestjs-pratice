import { DataSourceOptions } from 'typeorm';
import { User } from './src/user/entities/user.entity';
import { Topic } from 'src/user/entities/topic.entity';
import { Comment } from './src/user/entities/comment.entity';

const config: DataSourceOptions = {
  type: 'postgres',
  database: 'testDB',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  entities: [User, Topic, Comment],
  synchronize: true,
};

export default config;
