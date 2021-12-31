import { Employee } from '../../models/employee';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  @Input() employee: Employee;

  constructor(private employeeService: EmployeeService, private listComponent: EmployeeListComponent) { }

  ngOnInit() {
  }

}
