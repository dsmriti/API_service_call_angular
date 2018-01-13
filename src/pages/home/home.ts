import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
  posts:any;
  constructor( public http: Http) {
    // this.loadNews();

    this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=900feb0b813a4d00b5f04df1b10ea82d').map(res => res.json()).subscribe(data => {
            this.posts = data.articles;
            console.log(this.posts)
        });
      }
}
