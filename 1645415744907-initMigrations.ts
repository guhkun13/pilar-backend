import {MigrationInterface, QueryRunner} from "typeorm";

export class initMigrations1645415744907 implements MigrationInterface {
    name = 'initMigrations1645415744907'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar, "phoneNumber" varchar, "avatar" varchar, "isRegisteredWithGoogle" boolean NOT NULL DEFAULT (0), "isEmailConfirmed" boolean NOT NULL DEFAULT (0), "isPhoneNumberConfirmed" boolean NOT NULL DEFAULT (0), "currentHashedRefreshToken" varchar, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
