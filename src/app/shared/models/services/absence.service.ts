import {Absence, URISTRING} from "../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class AbsenceService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

      constructor(private httpClient: HttpClient) {}

      getAllAbsenceEntries() : Observable<Absence>{
        return this.httpClient.get<Absence>(URISTRING.URI.concat(URISTRING.ABSENCE));
      }

      getAllAbsenceEntriesForEmployee(employee_id: string): Observable<Absence>{
        const url = `${URISTRING.URI.concat(URISTRING.ABSENCE)}/${employee_id}`;
        return this.httpClient.get<Absence>(url);
      }

      createNewAbsenceEntry(newAbsence: Absence): Observable<Absence>{
        return this.httpClient.post<Absence>(URISTRING.URI.concat(URISTRING.ABSENCE), newAbsence);
      }

      updateAbsence(updatedAbsence: Absence): Observable<Absence>{
        const updateUrl = `${URISTRING.URI.concat(URISTRING.ABSENCE)}/${updatedAbsence.absence_id}`;
        return this.httpClient.put<Absence>(updateUrl, updatedAbsence);
      }

      deleteAbsenceEntry(deleteAbsence: Absence): Observable<Absence>{
        const deleteUrl = `${URISTRING.URI.concat(URISTRING.ABSENCE)}/${deleteAbsence.absence_id}`;
        return this.httpClient.delete<Absence>(deleteUrl);
      }
}