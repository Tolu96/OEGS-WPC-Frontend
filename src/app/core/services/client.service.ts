import {Client} from "../../shared/models/models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ClientService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

      constructor(private httpClient: HttpClient) {}

      private apiUrl = 'https://localhost:3307/oegs-db/api/v1/client';

      getAllClients() : Observable<Client>{
        return this.httpClient.get<Client>(this.apiUrl);
      }

      getClientbyId(clientid: number): Observable<Client>{
        const url = `${this.apiUrl}/${clientid}`;
        return this.httpClient.get<Client>(url);
      }

      createNewClient(newClient: Client): Observable<Client>{
        return this.httpClient.post<Client>(this.apiUrl, newClient);
      }

      updateClient(updatedClient: Client): Observable<Client>{
        const updateUrl = `${this.apiUrl}/${updatedClient.clientid}`;
        return this.httpClient.put<Client>(updateUrl, updatedClient);
      }

      deleteClient(clientid: number): Observable<Client>{
        const deleteUrl = `${this.apiUrl}/${clientid}`;
        return this.httpClient.delete<Client>(deleteUrl);
      }
}