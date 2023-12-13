import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { LessonsModule } from './lessons/lessons.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { EvaluationsModule } from './evaluations/evaluations.module';

@Module({
  imports: [LessonsModule, UsersModule, EvaluationsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
