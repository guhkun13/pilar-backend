import { Module } from '@nestjs/common';
import { GoogleAuthenticationController } from './googleAuthentication.controller';
import { ConfigModule } from '@nestjs/config';
import { GoogleAuthenticationService } from './googleAuthentication.service';
import { AuthenticationModule } from '../authentication/authentication.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [ConfigModule, UserModule, AuthenticationModule],
  providers: [GoogleAuthenticationService],
  controllers: [GoogleAuthenticationController],
  exports: [],
})
export class GoogleAuthenticationModule {}
