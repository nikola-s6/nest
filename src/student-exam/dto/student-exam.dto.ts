import { IsNotEmpty } from 'class-validator';

export class CreateStudentExamDTO {
  @IsNotEmpty()
  grade: number;
}
