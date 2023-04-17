import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { People } from '../../interface/peoples.interface';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public http: HttpClient) { }

  getPeople(): Observable<People[]> {
    return this.http.get<People[]>(`${environment.crucrud}/${environment.sessionId}/person`);
  }

  getPeopleById(id: string): Observable<People> {
    return this.http.get<People>(`${environment.crucrud}/${environment.sessionId}/person/${id}`);
  }

  postPeople(params: People): Observable<any> {
    return this.http.post<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/person`, params);
  }

  putPeople(params: People, id: string): Observable<any> {
    return this.http.put<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/person/${id}`, params);
  }

  deletePeople(id: string): Observable<any> {
    return this.http.delete<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/person/${id}`);
  }
}
