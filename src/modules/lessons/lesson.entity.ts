import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm"
import { EvaluationEntity } from "../evaluations/evaluation.entity"
import { ApiProperty } from "@nestjs/swagger";

@Entity()
export class LessonEntity {
    @ApiProperty({example: "1"})
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty({example: "Музыка"})
    @Column({ length: 100 })
    name: string

    @ApiProperty({example: "music"})
    @Column({ length: 20 })
    code: string

    @OneToMany(()=>EvaluationEntity, evaluation => evaluation.lesson)
    evaluations: EvaluationEntity[]
}