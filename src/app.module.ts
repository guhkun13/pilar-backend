import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import DBconfig from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './googleAuthentication/google.strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(DBconfig)],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
