import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GetTestService {

  constructor(private http: HttpClient) { }

  getTest(): Observable<any> {
    return this.http.get<any>("https://ir-search-fastapi-app.herokuapp.com/test").pipe(
       map((res:HttpResponse<any>) => {console.log(res)}));
  }
}
