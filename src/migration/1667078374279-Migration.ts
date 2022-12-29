import { MigrationInterface, QueryRunner } from "typeorm";



export class Migration1667078374280 implements MigrationInterface {
    name = 'Migration1667078374280'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.query(`CREATE TABLE "properties_products" ("referenceCode" SERIAL NOT NULL, "name" character varying NOT NULL, "sortOrder" integer NOT NULL, "filterable" boolean NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_5848b486dce40dfab8f44dbb340" PRIMARY KEY ("referenceCode"))`);
        await queryRunner.query(`CREATE TABLE "products_lenght" ("referenceCode" SERIAL NOT NULL, "name" character varying NOT NULL, "sortOrder" integer NOT NULL, CONSTRAINT "PK_df094094b67b5435f96336db7d8" PRIMARY KEY ("referenceCode"))`);
        await queryRunner.query(`CREATE TABLE "variantes" ("id" SERIAL NOT NULL, "codeIntegration" character varying NOT NULL, "codeNcm" character varying NOT NULL, "dateInativated" date NOT NULL, "firstFormat" "public"."variantes_firstformat_enum" NOT NULL DEFAULT 'EXIBIR ESTE PRODUTO', "secondFormat" "public"."variantes_secondformat_enum" NOT NULL DEFAULT 'NÃO PERMITIR A VENDA SEM ESTOQUE', "treeFormat" "public"."variantes_treeformat_enum" NOT NULL DEFAULT 'VENDA', CONSTRAINT "PK_1167a190c8965c02f8c406d7d88" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "variantes"`);
        await queryRunner.query(`DROP TABLE "products_lenght"`);
        await queryRunner.query(`DROP TABLE "properties_products"`);
    }

}
