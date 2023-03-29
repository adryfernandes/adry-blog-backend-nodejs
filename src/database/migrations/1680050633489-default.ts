import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1680050633489 implements MigrationInterface {
  name = 'default1680050633489';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`tags\` (\`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`text_color\` varchar(255) NULL, \`background_color\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_25cae3ff755adc0abe5ca28409\` (\`title\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`posts\` (\`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`description\` text NOT NULL, \`content\` text NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, UNIQUE INDEX \`IDX_2d82eb2bb2ddd7a6bfac8804d8\` (\`title\`), PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX \`IDX_2d82eb2bb2ddd7a6bfac8804d8\` ON \`posts\``,
    );
    await queryRunner.query(`DROP TABLE \`posts\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_25cae3ff755adc0abe5ca28409\` ON \`tags\``,
    );
    await queryRunner.query(`DROP TABLE \`tags\``);
  }
}
