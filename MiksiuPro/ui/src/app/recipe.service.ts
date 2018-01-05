import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getRecipes() {
    return this.http.get('http://localhost:8080/api/v1/recipes');
  }

  getRecipeById(id: string) {
    return this.http.get('http://localhost:8080/api/v1/recipes/' + id);
  }

  removeRecipe(id: string) {
    return this.http.delete('http://localhost:8080/api/v1/recipes/' + id);
  }
}
