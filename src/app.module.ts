import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LessonsModule } from './modules/lessons/lessons.module';
import { UsersModule } from './modules/users/users.module';
import { EvaluationsModule } from './modules/evaluations/evaluations.module';
import { configuration } from './config/configuration';
import { UsersController } from './modules/users/users.controller';
import { getORMConfig } from './ormconfig';
import { AuthModule } from './modules/simplest-auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot(getORMConfig()),
    LessonsModule,
    UsersModule,
    EvaluationsModule,
    AuthModule
  ],
})
export class AppModule {}
