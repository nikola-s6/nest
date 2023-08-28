import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { StudentExam } from './enitity/student-exam.entity';

@Injectable()
export class StudentExamRepository extends Repository<StudentExam> {
  constructor(private readonly dataSource: DataSource) {
    super(
      StudentExam,
      dataSource.createEntityManager(),
      dataSource.createQueryRunner(),
    );
  }

  async getStudentExamAttempts(id: number): Promise<Array<StudentExam>> {
    return this.find({
      relations: {
        student: false,
        exam: true,
      },
      where: {
        student: { id },
      },
    });
  }

  async getExamAttempts(id: number): Promise<Array<StudentExam>> {
    return this.find({
      relations: {
        student: true,
        exam: false,
      },
      where: {
        exam: { id },
      },
    });
  }
}
