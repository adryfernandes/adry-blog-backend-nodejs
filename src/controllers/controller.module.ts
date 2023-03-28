import { IsSingleTagValidator } from './dto/validations/isSingleTag.validator';
import { IsSingleTitleValidator } from './dto/validations/isSingleTitle.validator';
import { ServiceModule } from '../services/service.module';
import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { TagController } from './tag.controller';

@Module({
  imports: [ServiceModule],
  controllers: [PostController, TagController],
  providers: [IsSingleTitleValidator, IsSingleTagValidator],
})
export class ControllerModule {}
