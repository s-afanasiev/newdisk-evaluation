import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddLessonDto } from './dto/add-lesson.dto';
import { AddEvaluationDto } from './dto/add-evaluation.dto';
import { EvaluationsService } from '../evaluations/evaluations.service';

@Injectable()
export class LessonsService {
    constructor(
        private evaluationsService: EvaluationsService,
        @InjectRepository(LessonEntity) private lessonRepo: Repository<LessonEntity>,
    ) {}

    async lessonList() {
        const result = await this.lessonRepo.find({
            relations: {
                evaluations: true,
            },
        })

        return result;
    }

    async addLesson(addLessonDto: AddLessonDto) {
        //@ 1. Вариант №1: сначала ищем, затем пишем, если ещё не было 
        let lesson = await this.lessonRepo.findOneBy({
            code: addLessonDto.code,
        })
        if (!lesson) {
            lesson = await this.lessonRepo.save(addLessonDto);
        }

        //@ 2. Вариант №2: 
        // const lesson = await this.lessonRepo.upsert(
        //     [
        //         { code: addLessonDto.code, name: addLessonDto.name },
        //     ],
        //     ["code"],
        // )
        
        return lesson;
    }

    async addEvaluation(lessonId: string, body: AddEvaluationDto) {
        return await this.evaluationsService.addEvaluation(lessonId, body);
    }
}
