import { Module } from '@nestjs/common';
import { LessonsController } from './lessons.controller';
import { LessonsService } from './lessons.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonEntity } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LessonEntity])],
  controllers: [LessonsController],
  providers: [LessonsService]
})
export class LessonsModule {}
