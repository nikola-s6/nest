import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exam } from './entity/exam.entity';
import { ExamController } from './exam.controller';
import { ExamService } from './exam.service';
import { ExamRepository } from './exam.repository';
import { StudentExamService } from 'src/student-exam/student-exam.service';
import { StudentExamRepository } from 'src/student-exam/student-exam.repository';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [TypeOrmModule.forFeature([Exam]), forwardRef(() => StudentModule)],
  controllers: [ExamController],
  providers: [ExamService, ExamRepository],
  exports: [ExamService, ExamRepository],
})
export class ExamModule {}
