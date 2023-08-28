import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column('year')
  yearStarted: string;

  @Column()
  email: string;

  @OneToMany(() => StudentExam, (studentExam) => studentExam.student, {
    cascade: ['insert', 'update'],
  })
  examAttempts: StudentExam[];
}
