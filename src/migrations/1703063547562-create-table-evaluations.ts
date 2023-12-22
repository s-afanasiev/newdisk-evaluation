import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableEvaluations1703063547562 implements MigrationInterface {
    name = 'CreateTableEvaluations1703063547562'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "evaluation_entity" ("id" SERIAL NOT NULL, "score" character varying NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_e5149960965c95d4a352b8e9e58" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "evaluation_entity"`);
    }

}
