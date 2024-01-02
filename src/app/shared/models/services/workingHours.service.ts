import {WorkingHours, URISTRING} from "../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class WorkingHoursService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

      constructor(private httpClient: HttpClient) {}

      getAllWorkingHours() : Observable<WorkingHours>{
        return this.httpClient.get<WorkingHours>(URISTRING.URI.concat(URISTRING.WORKINGHOURS));
      }

      getWorkingHoursById(working_hours_id: string): Observable<WorkingHours>{
        const url = `${URISTRING.URI.concat(URISTRING.WORKINGHOURS)}/${working_hours_id}`;
        return this.httpClient.get<WorkingHours>(url);
      }

      createNewWorkingHour(newWorkingHours: WorkingHours): Observable<WorkingHours>{
        return this.httpClient.post<WorkingHours>(URISTRING.URI.concat(URISTRING.WORKINGHOURS), newWorkingHours);
      }

      updateWorkingHour(updatedWorkingHours: WorkingHours): Observable<WorkingHours>{
        const updateUrl = `${URISTRING.URI.concat(URISTRING.WORKINGHOURS)}/${updatedWorkingHours.working_hours_id}`;
        return this.httpClient.put<WorkingHours>(updateUrl, updatedWorkingHours);
      }

      deleteWorkingHour(working_hours_id: string): Observable<WorkingHours>{
        const deleteUrl = `${URISTRING.URI.concat(URISTRING.WORKINGHOURS)}/${working_hours_id}`;
        return this.httpClient.delete<WorkingHours>(deleteUrl);
      }
}
