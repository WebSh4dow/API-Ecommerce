import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1667079303496 implements MigrationInterface {
    name = 'Migration1667079303496'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variantes" RENAME COLUMN "master" TO "mastere"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variantes" RENAME COLUMN "mastere" TO "master"`);
    }

}
