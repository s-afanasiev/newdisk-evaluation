import { Injectable } from '@nestjs/common';
import { AddEvaluationDto } from '../lessons/dto/add-evaluation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EvaluationEntity } from './evaluation.entity';
import { Repository } from 'typeorm';
import { AddEvaluationAnswerDto } from './add-evaluation-answer.dto';

@Injectable()
export class EvaluationsService {
    constructor(
        @InjectRepository(EvaluationEntity) private evaluationsRepo: Repository<EvaluationEntity>
    ) {}

    async addEvaluation(lessonId: string, body: AddEvaluationDto) {
        console.log("EvaluationsService.addEvaluation: ", lessonId, body);

        const saving = {score: body.score, lesson: {id: parseInt(lessonId)}, user: {id: parseInt(body.user_id)} }
        let res;
        try {
            const res = await this.evaluationsRepo.save(saving);
            const answer: AddEvaluationAnswerDto = {
                id: String(res.id),
                user_id: String(res.user.id),
                score: res.score
            };
            return answer;
        } catch(er) {
            throw new Error(er.message)
        }
    }
}
