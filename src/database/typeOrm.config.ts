import { DataSource } from 'typeorm';
import { TagEntity } from './entities/tag.entity';
import { PostEntity } from './entities/post.entity';
import { KeyEntity } from './entities/key.entity';
import { default1680050633489 } from './migrations/1680050633489-default';
import { default1680051617578 } from './migrations/1680051617578-default';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog_adry',
  migrationsTableName: 'Migrations',
  entities: [PostEntity, TagEntity, KeyEntity],
  migrations: [default1680050633489, default1680051617578],
});
