import { Controller, Get, Post } from '@nestjs/common';
import { LessonsService } from './lessons.service';

@Controller('api/lessons')
export class LessonsController {
    constructor(private lessonsService: LessonsService) {}
    @Get()
    lessonList() {
        return this.lessonsService.lessonList();
    }

    @Post()
    addLesson() {
        return this.lessonsService.addLesson();
    }

    @Post("/:id/evaluations")
    addEvaluation() {
        return this.lessonsService.addEvaluation();
    }
}
