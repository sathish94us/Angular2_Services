import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'employee-list',
  styleUrls:['./employee-list.component.css'],
  templateUrl: './employee-list.component.html',
})

export class EmployeeList implements OnInit 
{
  employees=[];
  constructor(private _employeeservice:EmployeeService)
  {

  }
  ngOnInit()
  {
    this.employees=this._employeeservice.getEmployees();
  }
}
