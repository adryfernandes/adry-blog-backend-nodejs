import { DataSource } from 'typeorm';
import { TagEntity } from '../entities/tag.entity';

export const tagProviders = [
  {
    provide: 'TAG_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(TagEntity),
    inject: ['DATA_SOURCE'],
  },
];
