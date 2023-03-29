import { KeyController } from './key.controller';
import { Module } from '@nestjs/common';
import { ServiceModule } from '../services/service.module';
import { PostController } from './post.controller';
import { TagController } from './tag.controller';
import { ValidationsModule } from '../validations/validations.module';

@Module({
  imports: [ServiceModule, ValidationsModule],
  controllers: [PostController, TagController, KeyController],
})
export class ControllerModule {}
