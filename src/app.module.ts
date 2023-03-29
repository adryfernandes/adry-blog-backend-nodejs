import { AuthorizationMiddleware } from './middlewares/authorization.middleware';
import { Module, Post } from '@nestjs/common';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { ControllerModule } from './controllers/controller.module';
import { ServiceModule } from './services/service.module';
import { DatabaseModule } from './database/database.module';
import { ValidationsModule } from './validations/validations.module';
import { MiddlewaresModule } from './middlewares/middlewares.module';
import { RequestMethod } from '@nestjs/common/enums';

@Module({
  imports: [
    ControllerModule,
    ServiceModule,
    DatabaseModule,
    ValidationsModule,
    MiddlewaresModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizationMiddleware)
      .forRoutes(
        { path: '*', method: RequestMethod.PUT },
        { path: '*', method: RequestMethod.POST },
        { path: '*', method: RequestMethod.DELETE },
      );
  }
}
