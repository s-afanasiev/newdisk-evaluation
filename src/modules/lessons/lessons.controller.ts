import { applyDecorators, SetMetadata, UnauthorizedException } from "@nestjs/common";
import { Controller, Get, Post, Body, Param,  } from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { ApiBasicAuth, ApiBearerAuth, ApiCreatedResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse, } from '@nestjs/swagger';
import { LessonEntity } from './lesson.entity';
import { AddLessonDto } from './dto/add-lesson.dto';
import { AddEvaluationDto } from './dto/add-evaluation.dto';
import { AddLessonAnswerDto } from './dto/add-lesson-answer.dto';
import { AddEvaluationAnswerDto } from '../evaluations/add-evaluation-answer.dto';

@ApiTags("Lessons")
@Controller('api/lessons')
@ApiBasicAuth("Token auth")
@ApiUnauthorizedResponse({type: UnauthorizedException,})
export class LessonsController {
    constructor(private lessonsService: LessonsService) {}
    @Get()
    @ApiCreatedResponse({description: 'Lesson list here', type: [LessonEntity]})
    lessonList() {
        return this.lessonsService.lessonList();
    }

    @Post()
    @ApiOperation({ summary: 'add lesson:' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AddLessonAnswerDto})
    addLesson(@Body() body: AddLessonDto) {
        return this.lessonsService.addLesson(body);
    }

    @Post("/:id/evaluations")
    @ApiCreatedResponse({ description: 'successfully created.', type: AddEvaluationAnswerDto})
    async addEvaluation(@Param("id") lessonId: string, @Body() body: AddEvaluationDto) {
        return await this.lessonsService.addEvaluation(lessonId, body);
    }
}
