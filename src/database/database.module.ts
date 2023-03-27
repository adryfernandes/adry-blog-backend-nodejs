import { postProviders } from './providers/post.providers';
import { databaseProviders } from './providers/database.providers';
import { Module } from '@nestjs/common';

@Module({
  providers: [...databaseProviders, ...postProviders],
  exports: [...databaseProviders, ...postProviders],
})
export class DatabaseModule {}
