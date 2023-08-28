import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(private dataSource: DataSource) {
    super(
      Student,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }
}
