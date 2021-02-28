import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateDisciplinas1612614012871 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'disciplinas',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            //type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'nomeDisciplina ',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          // {
          //   name: 'created_at',
          //   type: 'timestamp with time zone',
          //   default: 'now()',
          // },
          // {
          //   name: 'updated_at',
          //   type: 'timestamp with time zone',
          //   default: 'now()',
          // },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('disciplinas');
  }

}
