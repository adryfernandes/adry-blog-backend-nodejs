import { keyProviders } from './providers/key.providers';
import { postProviders } from './providers/post.providers';
import { databaseProviders } from './providers/database.providers';
import { Module } from '@nestjs/common';
import { tagProviders } from './providers/tag.providers';

@Module({
  providers: [
    ...databaseProviders,
    ...postProviders,
    ...tagProviders,
    ...keyProviders,
  ],
  exports: [
    ...databaseProviders,
    ...postProviders,
    ...tagProviders,
    ...keyProviders,
  ],
})
export class DatabaseModule {}
