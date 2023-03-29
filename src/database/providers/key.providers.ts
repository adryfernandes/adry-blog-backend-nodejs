import { KeyEntity } from '../entities/key.entity';
import { DataSource } from 'typeorm';

export const keyProviders = [
  {
    provide: 'KEY_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(KeyEntity),
    inject: ['DATA_SOURCE'],
  },
];
