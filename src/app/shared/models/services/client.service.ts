import {Client, URISTRING} from "../models";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class ClientService{
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };

      constructor(private httpClient: HttpClient) {}

      getAllClients() : Observable<Client>{
        return this.httpClient.get<Client>(URISTRING.URI.concat(URISTRING.CLIENT));
      }

      getClientbyId(clientid: number): Observable<Client>{
        const url = `${URISTRING.URI.concat(URISTRING.CLIENT)}/${clientid}`;
        return this.httpClient.get<Client>(url);
      }

      createNewClient(newClient: Client): Observable<Client>{
        return this.httpClient.post<Client>(URISTRING.URI.concat(URISTRING.CLIENT), newClient);
      }

      updateClient(updatedClient: Client): Observable<Client>{
        const updateUrl = `${URISTRING.URI.concat(URISTRING.CLIENT)}/${updatedClient.clientid}`;
        return this.httpClient.put<Client>(updateUrl, updatedClient);
      }

      deleteClient(clientid: number): Observable<Client>{
        const deleteUrl = `${URISTRING.URI.concat(URISTRING.CLIENT)}/${clientid}`;
        return this.httpClient.delete<Client>(deleteUrl);
      }
}