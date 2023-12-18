import { MigrationInterface, QueryRunner } from "typeorm";

export class Test1702903719063 implements MigrationInterface {
    name = 'Test1702903719063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "lesson_entity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "code" character varying(20) NOT NULL, CONSTRAINT "PK_b55495de2aa48f9e1164ebac9a9" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "lesson_entity"`);
    }

}
