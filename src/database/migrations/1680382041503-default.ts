import { MigrationInterface, QueryRunner } from "typeorm";

export class default1680382041503 implements MigrationInterface {
    name = 'default1680382041503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tags\` (\`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`text_color\` varchar(255) NULL, \`background_color\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_25cae3ff755adc0abe5ca28409\` (\`title\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`posts\` (\`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`content\` text NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_2d82eb2bb2ddd7a6bfac8804d8\` (\`title\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`keys\` (\`id\` int NOT NULL AUTO_INCREMENT, \`x_api_key\` varchar(255) NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_f945181c52f8899215a1d21335\` (\`x_api_key\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`post_tags\` (\`post_uuid\` varchar(36) NOT NULL, \`tag_uuid\` varchar(36) NOT NULL, INDEX \`IDX_a0fe4f4002bda2dcfebb70f3b6\` (\`post_uuid\`), INDEX \`IDX_df4cb869f0b246e17b5e02a4d0\` (\`tag_uuid\`), PRIMARY KEY (\`post_uuid\`, \`tag_uuid\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`post_tags\` ADD CONSTRAINT \`FK_a0fe4f4002bda2dcfebb70f3b68\` FOREIGN KEY (\`post_uuid\`) REFERENCES \`posts\`(\`uuid\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`post_tags\` ADD CONSTRAINT \`FK_df4cb869f0b246e17b5e02a4d01\` FOREIGN KEY (\`tag_uuid\`) REFERENCES \`tags\`(\`uuid\`) ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`post_tags\` DROP FOREIGN KEY \`FK_df4cb869f0b246e17b5e02a4d01\``);
        await queryRunner.query(`ALTER TABLE \`post_tags\` DROP FOREIGN KEY \`FK_a0fe4f4002bda2dcfebb70f3b68\``);
        await queryRunner.query(`DROP INDEX \`IDX_df4cb869f0b246e17b5e02a4d0\` ON \`post_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_a0fe4f4002bda2dcfebb70f3b6\` ON \`post_tags\``);
        await queryRunner.query(`DROP TABLE \`post_tags\``);
        await queryRunner.query(`DROP INDEX \`IDX_f945181c52f8899215a1d21335\` ON \`keys\``);
        await queryRunner.query(`DROP TABLE \`keys\``);
        await queryRunner.query(`DROP INDEX \`IDX_2d82eb2bb2ddd7a6bfac8804d8\` ON \`posts\``);
        await queryRunner.query(`DROP TABLE \`posts\``);
        await queryRunner.query(`DROP INDEX \`IDX_25cae3ff755adc0abe5ca28409\` ON \`tags\``);
        await queryRunner.query(`DROP TABLE \`tags\``);
    }

}
