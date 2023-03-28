import { PostEntity } from './entities/post.entity';
import { DataSource } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
import { default1680024422348 } from './migrations/1680024422348-default';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog_adry',
  migrationsTableName: 'Migrations',
  entities: [PostEntity, TagEntity],
  migrations: [default1680024422348],
});
