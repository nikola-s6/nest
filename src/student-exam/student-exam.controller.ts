import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  UseInterceptors,
} from '@nestjs/common';
import { StudentExamService } from './student-exam.service';
import { CreateStudentExamDTO } from './dto/student-exam.dto';
import { NotFoundInterceptor } from 'src/interceptors/notFound.interceptor';
import { StudentExam } from './enitity/student-exam.entity';

@Controller('')
@UseInterceptors(NotFoundInterceptor)
export class StudentExamController {
  constructor(private readonly studentExamService: StudentExamService) {}

  @Post('student/:studentId/exam/:examId')
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(
    @Param('studentId', ParseIntPipe) studentId: number,
    @Param('examId', ParseIntPipe) examId: number,
    @Body() attempt: CreateStudentExamDTO,
  ) {
    try {
      await this.studentExamService.create(studentId, examId, attempt);
    } catch (e) {
      // interceptor hvata exception
      throw e;
    }
  }

  @Put('exam/:id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() attempt: CreateStudentExamDTO,
  ): Promise<StudentExam> {
    return this.studentExamService.update(id, attempt);
  }
}
