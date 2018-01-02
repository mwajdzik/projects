import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipes: Array<any>;

  constructor(private http: Http) {
    this.http.get('http://localhost:8080/api/v1/recipes')
      .subscribe(res => this.recipes = res.json());
  }
}
