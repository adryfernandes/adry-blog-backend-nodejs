import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';
import { ServiceModule } from './service/service.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [V1Module, ServiceModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
