import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class LessonsService {
    constructor(private dataSource: DataSource) {}
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
