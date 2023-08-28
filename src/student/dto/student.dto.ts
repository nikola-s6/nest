import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateStudentDTO {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  yearStarted: string;

  @IsEmail()
  email: string;
}
