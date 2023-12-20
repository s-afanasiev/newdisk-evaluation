import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationsEvaluationsLesson1703071335478 implements MigrationInterface {
    name = 'AddRelationsEvaluationsLesson1703071335478'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_entity" ADD "lessonId" integer`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" ADD CONSTRAINT "FK_97412f01581622d790556a9de38" FOREIGN KEY ("lessonId") REFERENCES "lesson_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" ADD CONSTRAINT "FK_b42443d327cdb67da35337720a1" FOREIGN KEY ("userId") REFERENCES "user_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "evaluation_entity" DROP CONSTRAINT "FK_b42443d327cdb67da35337720a1"`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" DROP CONSTRAINT "FK_97412f01581622d790556a9de38"`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "evaluation_entity" DROP COLUMN "lessonId"`);
    }

}
