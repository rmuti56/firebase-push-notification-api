import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as serviceAccountKey from 'src/credentials/service-account-key.json';

@Injectable()
export class FirebaseAdminService {
  private readonly admin: admin.app.App;

  constructor() {
    this.admin = admin.initializeApp({
      credential: admin.credential.cert({
        clientEmail: serviceAccountKey.client_email,
        privateKey: serviceAccountKey.private_key,
        projectId: serviceAccountKey.project_id,
      }),
    });
  }

  getMessaging(): admin.messaging.Messaging {
    return this.admin.messaging();
  }
}
