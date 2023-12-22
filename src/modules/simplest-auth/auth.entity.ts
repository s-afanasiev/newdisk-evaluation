import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { EvaluationEntity } from "../evaluations/evaluation.entity"

@Entity()
export class AuthEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 100 })
    pass: string
    
    @Column()
    token: string

}