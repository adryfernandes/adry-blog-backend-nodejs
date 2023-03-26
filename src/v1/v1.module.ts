import { ServiceModule } from './../service/service.module';
import { Module } from '@nestjs/common';
import { PostController } from './post/post.controller';

@Module({
  controllers: [PostController],
  imports: [ServiceModule],
})
export class V1Module {}