import { photoProviders } from './providers/post.providers';
import { databaseProviders } from './database.providers';
import { Module } from '@nestjs/common';

@Module({
  providers: [...databaseProviders, ...photoProviders],
  exports: [...databaseProviders, ...photoProviders],
})
export class DatabaseModule {}
