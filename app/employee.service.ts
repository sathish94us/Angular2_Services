import { Injectable } from "@angular/core";

@Injectable()
export class EmployeeService
{
    getEmployees()
    {
        return [{name:"Sathish"},{name:"Triad"},{name:"Chennai"},{name:"CCE"},{name:"USA"}];
    }
}
