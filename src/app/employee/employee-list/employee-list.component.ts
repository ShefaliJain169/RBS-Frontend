import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    employees: Employee[];
    displayedColumns = ['id', 'firstName', 'lastName', 'email', 'salary'];
    dataSource: MatTableDataSource<Employee>;

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private employeeService: EmployeeService) {  }

    ngOnInit(): void {
        this.getAllEmployees();
    }

    applyFilter(filterValue: string) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }

    getAllEmployees() {
        this.employeeService.findAll().subscribe( data => {
        this.employees = data;
            // Assign the data to the data source for the table to render
            this.dataSource = new MatTableDataSource(this.employees);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    createEmployee() {
        const firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
        const lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
        const email = (<HTMLInputElement>document.getElementById('email')).value;
        const salary = (<HTMLInputElement>document.getElementById('salary')).value;
        const employee = new Employee(0, firstName, lastName, email, Number(salary));
        this.employeeService.createEmployee(employee);
        this.employees.push(employee);
    }
    deleteEmployee(employee: Employee) {
        this.employeeService.deleteEmployeeById(employee.id).subscribe( data => {
            this.employees = this.employees.filter(u => u !== employee);
        });
    }
}
