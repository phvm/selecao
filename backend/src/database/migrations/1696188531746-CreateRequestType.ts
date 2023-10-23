import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRequestType1696188531746 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'requestType',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          {
            name: 'type',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('requestType');
  }
}
