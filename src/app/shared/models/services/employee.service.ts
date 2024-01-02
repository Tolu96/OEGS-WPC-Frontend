import { Employee, URISTRING} from "../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class EmployeeService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

      constructor(private httpClient: HttpClient) {}

      getAllEmployee() : Observable<Employee>{
        return this.httpClient.get<Employee>(URISTRING.URI.concat(URISTRING.EMPLOYEE));
      }

      getEmployeeById(employee_id: string): Observable<Employee>{
        const url = `${URISTRING.URI.concat(URISTRING.EMPLOYEE)}/${employee_id}`;
        return this.httpClient.get<Employee>(url);
      }

      createNewEmployee(newEmployee: Employee): Observable<Employee>{
        return this.httpClient.post<Employee>(URISTRING.URI.concat(URISTRING.EMPLOYEE), newEmployee);
      }

      updateEmployee(updatedEmployee: Employee): Observable<Employee>{
        const updateUrl = `${URISTRING.URI.concat(URISTRING.EMPLOYEE)}/${updatedEmployee.employee_id}`;
        return this.httpClient.put<Employee>(updateUrl, updatedEmployee);
      }

      deleteEmployee(employee_id: string): Observable<Employee>{
        const deleteUrl = `${URISTRING.URI.concat(URISTRING.EMPLOYEE)}/${employee_id}`;
        return this.httpClient.delete<Employee>(deleteUrl);
      }
}