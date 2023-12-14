import { Injectable } from '@nestjs/common';

@Injectable()
export class LessonsService {
    lessonList() {
        return "lesson list!"
    }

    addLesson() {
        return "add lesson!"
    }

    addEvaluation() {
        return "add evaluation!"
    }
}
