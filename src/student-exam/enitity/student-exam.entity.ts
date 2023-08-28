import { Exam } from 'src/exam/entity/exam.entity';
import { Student } from 'src/student/entity/student.entity';
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('student_exam')
export class StudentExam {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: string;

  // @Column({ primary: true })
  @ManyToOne(() => Student, (student) => student.examAttempts, {
    onDelete: 'RESTRICT',
  })
  student: Student;

  // @Column({ primary: true })
  @ManyToOne(() => Exam, (exam) => exam.studentsAttempts)
  exam: Exam;

  @Column()
  grade: number;
}
