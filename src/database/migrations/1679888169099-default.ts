import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1679888169099 implements MigrationInterface {
  name = 'default1679888169099';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`tags\` (\`uuid\` varchar(36) NOT NULL, \`title\` varchar(255) NOT NULL, \`text_color\` varchar(255) NULL, \`background_color\` varchar(255) NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`deleted_at\` datetime(6) NULL, PRIMARY KEY (\`uuid\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`posts\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`posts\` ADD \`deleted_at\` datetime(6) NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`deleted_at\``);
    await queryRunner.query(`ALTER TABLE \`posts\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(`DROP TABLE \`tags\``);
  }
}
