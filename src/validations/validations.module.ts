import { ServiceModule } from './../services/service.module';
import { IsSingleTagValidator } from './isSingleTag.validator';
import { IsSingleTitleValidator } from './isSingleTitle.validator';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  providers: [IsSingleTitleValidator, IsSingleTagValidator],
  exports: [IsSingleTitleValidator, IsSingleTagValidator],
})
export class ValidationsModule {}
