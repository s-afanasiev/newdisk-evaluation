import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100 })
    name: string

    @Column({ length: 30 })
    email: string
}