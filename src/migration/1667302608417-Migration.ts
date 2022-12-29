import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1667302608417 implements MigrationInterface {
    name = 'Migration1667302608417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variantes" ADD "referenceCode" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "criteriaReferenceCode" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "variantReferenceCode" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "typeReferenceCode" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "groupReferenceCode" bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "presentation" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "quantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "isFractionalStock" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "eanCode" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "additionalDeliveryTime" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "enabledForEmptyPriceList" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "minimumQuantity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "height" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "width" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "depth" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "code" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "categories" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "shoppingCategories" text array NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "title" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "keyword" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "trackingId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "active" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "value" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP CONSTRAINT "PK_1167a190c8965c02f8c406d7d88"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD CONSTRAINT "PK_1167a190c8965c02f8c406d7d88" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "variantes" DROP CONSTRAINT "PK_1167a190c8965c02f8c406d7d88"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "variantes" ADD CONSTRAINT "PK_1167a190c8965c02f8c406d7d88" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "active"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "trackingId"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "keyword"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "url"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "title"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "shoppingCategories"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "categories"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "code"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "depth"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "width"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "height"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "minimumQuantity"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "enabledForEmptyPriceList"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "additionalDeliveryTime"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "eanCode"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "isFractionalStock"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "quantity"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "presentation"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "groupReferenceCode"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "typeReferenceCode"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "variantReferenceCode"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "criteriaReferenceCode"`);
        await queryRunner.query(`ALTER TABLE "variantes" DROP COLUMN "referenceCode"`);
    }

}
