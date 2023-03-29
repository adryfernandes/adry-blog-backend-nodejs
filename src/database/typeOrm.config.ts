import { DataSource } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
import { PostEntity } from './entities/post.entity';
import { KeyEntity } from './entities/key.entity';
import { default1680055730368 } from './migrations/1680055730368-default';

import { config } from 'dotenv';
import { default1680056634115 } from './migrations/1680056634115-default';
config();

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_SCHEMA } = process.env;
export default new DataSource({
  type: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_SCHEMA,
  migrationsTableName: 'migrations',
  entities: [PostEntity, TagEntity, KeyEntity],
  migrations: [default1680055730368, default1680056634115],
});
