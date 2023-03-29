import { MigrationInterface, QueryRunner } from 'typeorm';

export class default1680056634115 implements MigrationInterface {
  name = 'default1680056634115';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`post_tags\` (\`post_uuid\` varchar(36) NOT NULL, \`tag_uuid\` varchar(36) NOT NULL, INDEX \`IDX_a0fe4f4002bda2dcfebb70f3b6\` (\`post_uuid\`), INDEX \`IDX_df4cb869f0b246e17b5e02a4d0\` (\`tag_uuid\`), PRIMARY KEY (\`post_uuid\`, \`tag_uuid\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`post_tags\` ADD CONSTRAINT \`FK_a0fe4f4002bda2dcfebb70f3b68\` FOREIGN KEY (\`post_uuid\`) REFERENCES \`posts\`(\`uuid\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`post_tags\` ADD CONSTRAINT \`FK_df4cb869f0b246e17b5e02a4d01\` FOREIGN KEY (\`tag_uuid\`) REFERENCES \`tags\`(\`uuid\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`post_tags\` DROP FOREIGN KEY \`FK_df4cb869f0b246e17b5e02a4d01\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`post_tags\` DROP FOREIGN KEY \`FK_a0fe4f4002bda2dcfebb70f3b68\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_df4cb869f0b246e17b5e02a4d0\` ON \`post_tags\``,
    );
    await queryRunner.query(
      `DROP INDEX \`IDX_a0fe4f4002bda2dcfebb70f3b6\` ON \`post_tags\``,
    );
    await queryRunner.query(`DROP TABLE \`post_tags\``);
  }
}
