import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ExamService } from './exam.service';
import { Exam } from './entity/exam.entity';
import { StudentExam } from 'src/student-exam/enitity/student-exam.entity';

@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) {}

  @Post()
  async create(@Body() exam: Exam) {
    this.examService.create(exam);
  }

  @Get(':id/attempts')
  async getAttempts(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Array<StudentExam>> {
    return this.examService.getAttempts(id);
  }
}
