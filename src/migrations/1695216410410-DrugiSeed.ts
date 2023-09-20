import { Department } from 'src/department/entity/department.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class DrugiSeed1695216410410 implements MigrationInterface {
  name = ' DrugiSeed1695216410410';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<Department>(Department, {
        name: 'Katedra za informacione tehnologije',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM department');
  }
}
