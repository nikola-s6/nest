import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { StudentModule } from './student/student.module';
import { DepartmentModule } from './department/department.module';
import { ExamModule } from './exam/exam.module';
import typeorm from './config/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [typeorm],
    }),
    DatabaseModule,
    StudentModule,
    DepartmentModule,
    ExamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
