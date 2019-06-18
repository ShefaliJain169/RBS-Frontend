import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeeService {
    private apiUrl = 'http://localhost:8080/api/employees';
    constructor(private http: HttpClient) {
    }

    findAll() {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    getEmployeeById(id: number) {
        return this.http.get(this.apiUrl + '/' + id);
    }

    createEmployee(employee: Employee) {
        return this.http.post(this.apiUrl, employee);
    }

    deleteEmployeeById(id: number) {
        return this.http.delete(this.apiUrl + '/' + id);
    }

    private handleError(error: any): Promise<Array<any>> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
