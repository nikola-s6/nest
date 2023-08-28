import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import { Department } from './entity/department.entity';
import { DepartmentController } from './department.controller';
import { DepartmentService } from './department.service';
import { DepartmentRepository } from './department.repository';
import { StudentExamController } from 'src/student-exam/student-exam.controller';
import { StudentExamRepository } from 'src/student-exam/student-exam.repository';
import { StudentExamService } from 'src/student-exam/student-exam.service';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentController],
  providers: [DepartmentService, DepartmentRepository],
})
export class DepartmentModule {}
