import { ServiceModule } from '../service/service.module';
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TagController } from './tag.controller';

@Module({
  controllers: [PostController, TagController],
  imports: [ServiceModule],
})
export class ControllerModule {}
