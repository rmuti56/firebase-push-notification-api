import { Body, Controller, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';

@Controller('notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @Post('devices/sends')
  sendToDevice(@Body() sendToDeviceDto: Message) {
    try {
      return this.notificationService.sendToDevice({
        ...sendToDeviceDto,
      });
    } catch (error) {
      console.error(error);
    }
  }
}
