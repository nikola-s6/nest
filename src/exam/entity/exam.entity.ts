import { Department } from 'src/department/entity/department.entity';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => StudentExam, (studetnExam) => studetnExam.exam)
  studentsAttempts: StudentExam[];

  @ManyToOne(() => Department, (department) => department.exams)
  department: Department;
}
