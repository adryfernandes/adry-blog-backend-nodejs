import { ServiceModule } from '../service/service.module';
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  imports: [ServiceModule],
})
export class ControllerModule {}
