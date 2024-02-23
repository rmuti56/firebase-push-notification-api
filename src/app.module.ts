import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [CoreModule, NotificationModule],
})
export class AppModule {}
