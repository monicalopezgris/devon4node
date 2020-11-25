import { Resolver, Query, Args } from '@nestjs/graphql';
import { EmployeeCrudService } from './services/employee.crud.service';
import { Employee } from './model/entities/employee.entity';


@Resolver()
export class EmployeeResolver {

  constructor(private readonly employeeService: EmployeeCrudService) {    
  }

  
  @Query('employes')
  findAll(): Promise<Employee[]> {
    return this.employeeService.find();
  }

  @Query('employeById')
  findOneById(@Args('id') id: number): Promise<Employee | undefined> {
    return this.employeeService.findOne(id);
  }
  
}