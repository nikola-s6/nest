import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentRepository } from './student.repository';
import { Student } from './entity/student.entity';
import { CreateStudentDTO } from './dto/student.dto';
import { QueryRunner } from 'typeorm';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import { StudentExamRepository } from 'src/student-exam/student-exam.repository';

@Injectable()
export class StudentService {
  constructor(
    private studentRepository: StudentRepository,
    private readonly studentExamRepository: StudentExamRepository,
  ) {}

  async findAll(): Promise<Array<Student>> {
    return this.studentRepository.find();
  }

  @UsePipes(new ValidationPipe({ transform: true }))
  async save(student: CreateStudentDTO) {
    this.studentRepository.save(this.studentRepository.create(student));
  }

  async find(id: number): Promise<Student> {
    // return this.studentRepository.findOneBy({ id: id });
    return this.studentRepository.findOne({
      where: {
        id,
      },
      relations: {
        examAttempts: true,
      },
    });
  }

  //   ovde sam probao upravljanje transakcijama
  async update(id: number, email: string): Promise<Student> {
    let updatedStudent: Student;
    const queryRunner: QueryRunner = this.studentRepository.queryRunner;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      // I
      // await queryRunner.manager.save(
      //   this.studentRepository.create({ id: id, email: email }),
      // );

      // II
      await queryRunner.manager.save(Student, { id: id, email: email });
      updatedStudent = await queryRunner.manager.findOne(Student, {
        where: {
          id,
        },
      });
      await this.studentRepository.queryRunner.commitTransaction();
    } catch (error) {
      await this.studentRepository.queryRunner.rollbackTransaction();
    }

    return updatedStudent;
  }

  async getExams(id: number): Promise<Array<StudentExam>> {
    return this.studentExamRepository.getStudentExamAttempts(id);
  }

  async delete(id: number) {
    try {
      await this.studentRepository.delete(id);
    } catch (error) {
      throw error;
    }
  }
}
