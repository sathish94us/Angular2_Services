import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'Employee-detail',
  templateUrl: './employee-detail.component.html'
})
export class EmployeeDetail implements OnInit 
{
  employeesdet=[];
  constructor(private _employeeservice:EmployeeService)
  {

  }
  ngOnInit()
  {
    this.employeesdet=this._employeeservice.getEmployees();
  }
}
