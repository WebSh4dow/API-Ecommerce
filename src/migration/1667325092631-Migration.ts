import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1667325092631 implements MigrationInterface {
    name = 'Migration1667325092631'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "stockQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "stockMinimumquantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dimensionGroupHeight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dimensionGroupWidth" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dimensionGroupWeight" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "dimensionGroupDepth" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" ADD "categoriesCategories" text array NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "categoriesCategories"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dimensionGroupDepth"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dimensionGroupWeight"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dimensionGroupWidth"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "dimensionGroupHeight"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stockMinimumquantity"`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "stockQuantity"`);
    }

}
