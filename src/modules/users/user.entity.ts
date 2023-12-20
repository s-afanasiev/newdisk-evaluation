import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EvaluationEntity } from "../evaluations/evaluation.entity"

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 30 })
    email: string
}