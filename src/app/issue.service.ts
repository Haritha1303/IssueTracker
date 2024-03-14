import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private apiUrl="http://localhost:9076/api/issues"


  constructor(private http: HttpClient) { }

getIssues():Observable<any>
{
  return this.http.get<any>(this.apiUrl);
}

addIssue(issueData:any):Observable<any>
{
  return this.http.post<any>(this.apiUrl,issueData);
}

deleteIssue(issueId: number) :Observable<any>{
    const url='${this.apiUrl/${issueId}';
return this.http.delete<any>(url);
}

}
