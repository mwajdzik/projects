import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable()
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getRecipes() {
    return this.http.get(environment.api + '/api/v1/recipes');
  }

  getRecipeById(id: string) {
    return this.http.get(environment.api + '/api/v1/recipes/' + id);
  }

  removeRecipe(id: string) {
    return this.http.delete(environment.api + '/api/v1/recipes/' + id);
  }
}
