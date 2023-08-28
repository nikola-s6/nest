import { Injectable } from '@nestjs/common';
import { Department } from './entity/department.entity';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  async findAll(): Promise<Array<Department>> {
    return this.departmentRepository.find();
  }

  async find(id: number): Promise<Department> {
    return this.departmentRepository.findOne({
      where: {
        id,
      },
      relations: {
        exams: true,
      },
    });
  }

  async save(department: Department) {
    this.departmentRepository.save(department);
  }
}
