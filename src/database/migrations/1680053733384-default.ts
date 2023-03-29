import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680053733384 implements MigrationInterface {
    name = 'default1680053733384'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`keys\` CHANGE \`key\` \`x_api_key\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`keys\` DROP COLUMN \`x_api_key\``);
        await queryRunner.query(`ALTER TABLE \`keys\` ADD \`x_api_key\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`keys\` DROP COLUMN \`x_api_key\``);
        await queryRunner.query(`ALTER TABLE \`keys\` ADD \`x_api_key\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`keys\` CHANGE \`x_api_key\` \`key\` varchar(255) NOT NULL`);
    }

}
