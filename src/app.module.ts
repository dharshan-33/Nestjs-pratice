import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import config from '../ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [TypeOrmModule.forRoot(config), UserModule, CommentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
