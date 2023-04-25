import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Jobs } from '../../interface/jobs.interface';


@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(public http: HttpClient) { }

  getList(): Observable<Jobs[]> {
    return this.http.get<Jobs[]>(`${environment.crucrud}/${environment.sessionId}/jobs`);
  }

  getJobById(id: string): Observable<Jobs> {
    return this.http.get<Jobs>(`${environment.crucrud}/${environment.sessionId}/jobs/${id}`);
  }

  postJob(params: Jobs): Observable<any> {
    return this.http.post<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/jobs`, params);
  }

  putJob(params: Jobs, id: string): Observable<any> {
    return this.http.put<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/jobs/${id}`, params);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete<Observable<any>>(`${environment.crucrud}/${environment.sessionId}/jobs/${id}`);
  }
}
