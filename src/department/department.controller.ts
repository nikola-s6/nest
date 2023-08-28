import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Department } from './entity/department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async findAll(): Promise<Array<Department>> {
    return this.departmentService.findAll();
  }

  @Get(':id')
  async find(@Param('id', ParseIntPipe) id: number): Promise<Department> {
    return this.departmentService.find(id);
  }

  @Post()
  async create(@Body() department: Department) {
    this.departmentService.save(department);
  }
}
