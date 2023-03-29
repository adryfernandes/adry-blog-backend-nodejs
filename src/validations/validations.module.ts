import { IsHexadecimalCodeValitador } from './isHexadecimalCode.validator';
import { ServiceModule } from './../services/service.module';
import { IsSingleTagValidator } from './isSingleTag.validator';
import { IsSingleTitleValidator } from './isSingleTitle.validator';
import { Module } from '@nestjs/common';

@Module({
  imports: [ServiceModule],
  providers: [
    IsSingleTitleValidator,
    IsSingleTagValidator,
    IsHexadecimalCodeValitador,
  ],
  exports: [
    IsSingleTitleValidator,
    IsSingleTagValidator,
    IsHexadecimalCodeValitador,
  ],
})
export class ValidationsModule {}
