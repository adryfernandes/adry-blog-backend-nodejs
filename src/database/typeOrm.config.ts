import { PostEntity } from './entities/post.entity';
import { DataSource } from 'typeorm';
import { default1679885954898 } from './migrations/1679885954898-default';

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'blog_adry',
  migrationsTableName: 'Migrations',
  entities: [PostEntity],
  migrations: [default1679885954898],
});
