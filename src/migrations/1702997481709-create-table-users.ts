import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableUsers1702997481709 implements MigrationInterface {
    name = 'CreateTableUsers1702997481709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_entity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" character varying(30) NOT NULL, CONSTRAINT "PK_b54f8ea623b17094db7667d8206" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_entity"`);
    }

}
