import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { LessonsModule } from './lessons/lessons.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { EvaluationsModule } from './evaluations/evaluations.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    LessonsModule, 
    UsersModule, 
    EvaluationsModule, 
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.env'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRoot({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: configService.get("db.type"),
        host: configService.get("db.host"),
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [`${__dirname}/**/*.entity{.ts,.js}`],
        synchronize: true,
      }),
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
