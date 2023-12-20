import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from "typeorm"
import { LessonEntity } from "../lessons/lesson.entity"
import { UserEntity } from "../users/user.entity"

@Entity()
export class EvaluationEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    score: string

    @CreateDateColumn({type: "timestamptz", select: false })
    createAt: Date

    @ManyToOne(()=>LessonEntity, lesson => lesson.evaluations)
    lesson: LessonEntity
    
    @ManyToOne(()=>UserEntity, { eager: true })
    user: UserEntity
}