import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRequest1696188604832 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'request',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
            isUnique: true,
            generationStrategy: 'increment',
          },
          { name: 'text', type: 'varchar' },
          {
            name: 'isClosed',
            type: 'boolean',
            default: 'false',
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
    await queryRunner.dropTable('request');
  }
}
