import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EvaluationEntity } from "../evaluations/evaluation.entity"

@Entity()
export class LessonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 20 })
    code: string

    @OneToMany(()=>EvaluationEntity, evaluation => evaluation.lesson)
    evaluations: EvaluationEntity[]
}