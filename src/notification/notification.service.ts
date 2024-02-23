import { Injectable } from '@nestjs/common';
import { Message } from 'firebase-admin/lib/messaging/messaging-api';
import { FirebaseAdminService } from 'src/core/firebase-admin/firebase-admin.service';

@Injectable()
export class NotificationService {
  constructor(private readonly firebaseAdminService: FirebaseAdminService) {}

  sendToDevice(sendToDeviceDto: Message) {
    return this.firebaseAdminService.getMessaging().send(sendToDeviceDto);
  }
}
