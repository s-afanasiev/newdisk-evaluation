import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableAuth1703256035898 implements MigrationInterface {
    name = 'CreateTableAuth1703256035898'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "auth_entity" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "pass" character varying(100) NOT NULL, "token" character varying NOT NULL, CONSTRAINT "PK_d3d458da474344a6982aec36b5b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "auth_entity"`);
    }

}
