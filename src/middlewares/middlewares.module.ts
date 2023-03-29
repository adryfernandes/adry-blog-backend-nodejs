import { Module } from '@nestjs/common';
import { ServiceModule } from './../services/service.module';
import { AuthorizationMiddleware } from './authorization.middleware';

@Module({
  imports: [ServiceModule],
  providers: [AuthorizationMiddleware],
  exports: [AuthorizationMiddleware],
})
export class MiddlewaresModule {}
