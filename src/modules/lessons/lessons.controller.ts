import { Controller, Get, Post, Body } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, } from '@nestjs/swagger';
import { LessonEntity } from './lesson.entity';
import { AddLessonDto } from './add-lesson.dto';

@ApiTags("Lessons")
@Controller('api/lessons')
export class LessonsController {
    constructor(private lessonsService: LessonsService) {}
    @Get()
    @ApiResponse({
        status: 200,
        description: 'Lesson list here',
        type: LessonEntity,
      })
    lessonList() {
        return this.lessonsService.lessonList();
    }

    @Post()
    @ApiOperation({ summary: 'add lesson:' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    addLesson(@Body() body: AddLessonDto) {
        return this.lessonsService.addLesson(body);
    }

    @Post("/:id/evaluations")
    @ApiBearerAuth()
    addEvaluation() {
        return this.lessonsService.addEvaluation();
    }
}
