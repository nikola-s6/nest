import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './entity/student.entity';
import { CreateStudentDTO } from './dto/student.dto';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  async findAll(): Promise<Array<Student>> {
    return this.studentService.findAll();
  }

  @Post()
  async create(@Body() student: CreateStudentDTO) {
    this.studentService.save(student);
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentService.find(id);
  }

  @Put(':id')
  async updateStudent(
    @Param('id', ParseIntPipe) id: number,
    @Body('email') email: string,
  ): Promise<Student> {
    // updates only email
    return this.studentService.update(id, email);
  }

  @Get(':id/exams')
  async getExams(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Array<StudentExam>> {
    return this.studentService.getExams(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      await this.studentService.delete(id);
    } catch (error) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
