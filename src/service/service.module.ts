import { DatabaseModule } from '../database/database.module';
import { PostService } from './post.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [PostService],
  exports: [PostService],
})
export class ServiceModule {}
