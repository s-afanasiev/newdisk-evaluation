import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class LessonEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 20 })
    code: string
}