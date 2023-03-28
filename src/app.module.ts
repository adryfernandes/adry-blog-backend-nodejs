import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controller.module';
import { ServiceModule } from './services/service.module';
import { DatabaseModule } from './database/database.module';
import { ValidationsModule } from './validations/validations.module';

@Module({
  imports: [ControllerModule, ServiceModule, DatabaseModule, ValidationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
