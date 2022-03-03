import { MigrationInterface, QueryRunner } from 'typeorm'

export class generate1646268955793 implements MigrationInterface {
  name = 'generate1646268955793'

  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`age\` int NOT NULL, UNIQUE INDEX \`IDX_a95e949168be7b7ece1a2382fe\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
    await queryRunner.query(`CREATE TABLE \`category\` (\`id\` int NOT NULL AUTO_INCREMENT, \`uuid\` varchar(36) NOT NULL, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NULL, UNIQUE INDEX \`IDX_86ee096735ccbfa3fd319af183\` (\`uuid\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX \`IDX_86ee096735ccbfa3fd319af183\` ON \`category\``)
    await queryRunner.query(`DROP TABLE \`category\``)
    await queryRunner.query(`DROP INDEX \`IDX_a95e949168be7b7ece1a2382fe\` ON \`user\``)
    await queryRunner.query(`DROP TABLE \`user\``)
  }

}
