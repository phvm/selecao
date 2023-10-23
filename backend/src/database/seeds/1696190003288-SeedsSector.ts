import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedsSector1696190003288 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO sector (name) 
    VALUES
    ('Secretaria de Graduação'),
    ('Gerência de Sistemas');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "sector"`);
  }
}
