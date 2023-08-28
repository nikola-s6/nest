import { Module } from '@nestjs/common';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entity/student.entity';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import { StudentRepository } from './student.repository';
import { StudentExamController } from 'src/student-exam/student-exam.controller';
import { StudentExamService } from 'src/student-exam/student-exam.service';
import { StudentExamRepository } from 'src/student-exam/student-exam.repository';
import { ExamModule } from 'src/exam/exam.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { NotFoundInterceptor } from 'src/interceptors/notFound.interceptor';

@Module({
  imports: [TypeOrmModule.forFeature([Student, StudentExam]), ExamModule],
  controllers: [StudentController, StudentExamController],
  providers: [
    StudentService,
    StudentRepository,
    StudentExamService,
    StudentExamRepository,
    {
      provide: APP_INTERCEPTOR,
      useClass: NotFoundInterceptor,
    },
  ],
  exports: [StudentExamService, StudentExamRepository],
})
export class StudentModule {}
