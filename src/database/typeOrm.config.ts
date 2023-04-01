import { DataSource } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
import { PostEntity } from './entities/post.entity';
import { KeyEntity } from './entities/key.entity';
import { default1680382041503 } from './migrations/1680382041503-default';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog_adry',
  migrationsTableName: 'migrations',
  entities: [PostEntity, TagEntity, KeyEntity],
  migrations: [default1680382041503],
});
