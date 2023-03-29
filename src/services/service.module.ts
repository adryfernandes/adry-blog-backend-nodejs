import { KeyService } from './key.service';
import { TagService } from 'src/services/tag.service';
import { DatabaseModule } from '../database/database.module';
import { PostService } from './post.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [DatabaseModule],
  providers: [PostService, TagService, KeyService],
  exports: [PostService, TagService, KeyService],
})
export class ServiceModule {}
