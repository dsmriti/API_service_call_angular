// import { HttpClient } from '@angular/common/http';
import {Http,RequestOptions, Headers} from "@angular/http";
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the NewsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsServiceProvider {
  // data:any;

  constructor( public http: Http) {
    console.log('Hello NewsServiceProvider Provider');
//     public loaddata() {
//   if (this.data) {
//     // already loaded data
//     return Promise.resolve(this.data);
//   }
//
//   return new Promise(resolve => {
//     this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=900feb0b813a4d00b5f04df1b10ea82d')
//       .map(res => res.json())
//       .subscribe(data => {
//   this.data = data.articles;
//   resolve(this.data);
// });
//   });
// }


  // public load():Observable<any[]>{
  //
  //   return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=900feb0b813a4d00b5f04df1b10ea82d')
  //     .map(res=>res.json())
  //     .catch((error:any)=>Observable.throw(error=>error.json())
  //     )
  // }



// load() {
//   if (this.data) {
//     // already loaded data
//     return Promise.resolve(this.data);
//   }
//
//   // don't have the data yet
//   return new Promise(resolve => {
//     // We're using Angular HTTP provider to request the data,
//     // then on the response, it'll map the JSON data to a parsed JS object.
//     // Next, we process the data and resolve the promise with the new data.
//     this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=900feb0b813a4d00b5f04df1b10ea82d')
//       .map(res => res.json())
//       .subscribe(data => {
//         // we've got back the raw data, now generate the core schedule data
//         // and save the data for later reference
//         this.data = data.status;
//         resolve(this.data);
//       });
//   });
// }



  }


}
