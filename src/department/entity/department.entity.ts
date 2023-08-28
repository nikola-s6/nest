import { Exam } from 'src/exam/entity/exam.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Exam, (exam) => exam.department, {
    cascade: ['update', 'insert'],
  })
  exams: Exam[];
}
