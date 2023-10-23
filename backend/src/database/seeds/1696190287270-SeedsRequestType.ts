import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedsRequestType1696190287270 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO requestType (type)
    VALUES
    ('Atividade complementar'),
    ('Dispensa de disciplina'),
    ('Reserva de sala'),
    ('Emissão de crachá'),
    ('Ajuste de cotas de impressão'),
    ('problemas técnicos');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "requestType"`);
  }
}
