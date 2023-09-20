import { Student } from 'src/student/entity/student.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class $npmConfigName1695215383754 implements MigrationInterface {
  name = ' $npmConfigName1695215383754';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.save(
      queryRunner.manager.create<Student>(Student, {
        firstName: 'Nikola',
        lastName: 'Stojilkovic',
        yearStarted: '2019',
        email: 'nikola.stojilkovic6@gmail.com',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DELETE * FROM student');
  }
}
