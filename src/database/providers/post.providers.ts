import { DataSource } from 'typeorm';
import { PostEntity } from '../entities/post.entity';

export const photoProviders = [
  {
    provide: 'POST_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(PostEntity),
    inject: ['DATA_SOURCE'],
  },
];
