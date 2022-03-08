import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class GetGiveawaysService {
  searchKeyValue:any;
  searchKeyIndex:any;
  getTweetUrl:any;

  constructor(private http: HttpClient) { }
  // getTweets():Observable<any>{
  //     return this.http.get('assets/ResponseSample.json')
  //       .map((resp) => {
  //         return resp as any;
  //       });
  // }
  getTweetsBasedOnIndex(): Observable<any> {
    return this.http.get("https://ir-search-fastapi-app.herokuapp.com/search/" +this.searchKeyIndex 
    + "/"+this.searchKeyValue).pipe(
      //  map(res => JSON.stringify(res)));
      map(res => res));
  }
  // getTweetsBasedOnIndex(): Observable<any> {
  //   return this.http.get<any>("https://ir-search-fastapi-app.herokuapp.com/search/" +this.searchKeyIndex 
  //   + "/"+this.searchKeyValue).pipe(
  //      map((res:HttpResponse<any>) =>
  //      {
  //        console.log(res);
  //      })); 
  // }
}
