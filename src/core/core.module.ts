import { Global, Module } from '@nestjs/common';
import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';

@Global()
@Module({
  imports: [FirebaseAdminModule],
  exports: [FirebaseAdminModule],
})
export class CoreModule {}
