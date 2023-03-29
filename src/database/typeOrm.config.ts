import { DataSource } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
import { PostEntity } from './entities/post.entity';
import { KeyEntity } from './entities/key.entity';
import { default1680053558788 } from './migrations/1680053558788-default';
import { default1680053733384 } from './migrations/1680053733384-default';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog_adry',
  migrationsTableName: 'Migrations',
  entities: [PostEntity, TagEntity, KeyEntity],
  migrations: [default1680053558788, default1680053733384],
});
