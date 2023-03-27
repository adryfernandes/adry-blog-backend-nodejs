import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { ServiceModule } from './service/service.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ControllerModule, ServiceModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
