import { Controller, Get, Post } from '@nestjs/common';

@Controller('lessons')
export class LessonsController {
    @Get()
    lessonList() {
        return "lesson list!"
    }

    @Post()
    addLesson() {
        return "add lesson!"
    }

    @Post("/:id/evaluations")
    addEvaluation() {
        return "add evaluation!"
    }
}
