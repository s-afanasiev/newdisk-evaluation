import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { LessonEntity } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AddLessonDto } from './add-lesson.dto';

@Injectable()
export class LessonsService {
    constructor(
        private entityManager: EntityManager,
        @InjectRepository(LessonEntity) private lessonRepo: Repository<LessonEntity>,
    ) {}

    async lessonList() {
        //console.log("LessonsService.lessonList: entityManager=", this.entityManager);
        const result = await this.entityManager.find(LessonEntity);
        console.log("LessonsService.lessonList: result=", result);
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
        
        return lesson;
    }

    addEvaluation() {
        return "add evaluation!"
    }
}
