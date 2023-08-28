import { Injectable } from '@nestjs/common';
import { ExamRepository } from './exam.repository';
import { Exam } from './entity/exam.entity';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import { StudentExamRepository } from 'src/student-exam/student-exam.repository';

@Injectable()
export class ExamService {
  constructor(
    private readonly examRepository: ExamRepository,
    private readonly studentExamRepository: StudentExamRepository,
  ) {}

  async create(exam: Exam) {
    this.examRepository.save(exam);
  }

  async getAttempts(id: number): Promise<Array<StudentExam>> {
    return this.studentExamRepository.getExamAttempts(id);
  }
}
