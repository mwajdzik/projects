import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class RecipeService {

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.http.get('http://localhost:8080/api/v1/recipes');
  }

  getRecipeById(id: string) {
    return this.http.get('http://localhost:8080/api/v1/recipes/' + id);
  }
}
