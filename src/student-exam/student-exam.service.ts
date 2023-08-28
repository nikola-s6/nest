import { Injectable } from '@nestjs/common';
import { CreateStudentExamDTO } from './dto/student-exam.dto';
import { StudentExamRepository } from './student-exam.repository';
import { StudentRepository } from 'src/student/student.repository';
import { Student } from 'src/student/entity/student.entity';
import { Exam } from 'src/exam/entity/exam.entity';
import { ExamRepository } from 'src/exam/exam.repository';
import { QueryRunner } from 'typeorm';
import { StudentExam } from './enitity/student-exam.entity';

@Injectable()
export class StudentExamService {
  constructor(
    private readonly studentExamRepository: StudentExamRepository,
    private readonly studentRepository: StudentRepository,
    private readonly examRepository: ExamRepository,
  ) {}

  async create(
    studentId: number,
    examId: number,
    attemptData: CreateStudentExamDTO,
  ) {
    const queryRunner: QueryRunner = this.studentRepository.queryRunner;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // const student: Student = await queryRunner.manager.findOneOrFail(
      //   Student,
      //   {
      //     where: {
      //       id: studentId,
      //     },
      //   },
      // );

      // const exam: Exam = await queryRunner.manager.findOneOrFail(Exam, {
      //   where: {
      //     id: examId,
      //   },
      // });

      // await queryRunner.manager.save(StudentExam, {
      //   grade: attemptData.grade,
      //   student: student,
      //   exam: exam,
      // });

      await queryRunner.manager.save(StudentExam, {
        grade: attemptData.grade,
        student: {
          id: studentId,
        },
        exam: {
          id: examId,
        },
      });

      await queryRunner.commitTransaction();
    } catch (e) {
      await queryRunner.rollbackTransaction();
      throw e;
    }
  }

  async update(
    id: number,
    attempt: CreateStudentExamDTO,
  ): Promise<StudentExam> {
    return this.studentExamRepository.save(
      this.studentExamRepository.create({
        id: id,
        grade: attempt.grade,
      }),
    );
  }
}
