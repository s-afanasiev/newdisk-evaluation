import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddLessonDto } from './add-lesson.dto';
import { AddEvaluationDto } from './add-evaluation.dto';
import { EvaluationsService } from '../evaluations/evaluations.service';

@Injectable()
export class LessonsService {
    constructor(
        private entityManager: EntityManager,
        private evaluationsService: EvaluationsService,
        @InjectRepository(LessonEntity) private lessonRepo: Repository<LessonEntity>,
    ) {}

    async lessonList() {
        //console.log("LessonsService.lessonList: entityManager=", this.entityManager);
        
        //const result = await this.entityManager.find(LessonEntity);
        //@ 1.
        const result = await this.lessonRepo.find({
            relations: {
                evaluations: true,
            },
        })

        //@ 2.
        // const qb = await this.lessonRepo.createQueryBuilder("lesson")
        //     .select(["lesson.*", "evals.id", "evals.score", "evals.user"])
        //     .leftJoin("lesson.evaluations", "evals")
        // console.log(qb.getSql());
        // const result = qb.getMany()

        //console.log("LessonsService.lessonList: result=", result);
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

        //@ 2. Вариант №2: автоматический обновляем запись и возвращаем ?
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
