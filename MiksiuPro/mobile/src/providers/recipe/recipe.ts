import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class RecipeProvider {

  private environment;

  constructor(public http: HttpClient) {
    this.environment = {
      api: 'http://localhost:8080'
    }
  }

  getRecipes() {
    return this.http.get(this.environment.api + '/api/v1/recipes');
  }

  getRecipeById(id: string) {
    return this.http.get(this.environment.api + '/api/v1/recipes/' + id);
  }

  removeRecipe(id: string) {
    return this.http.delete(this.environment.api + '/api/v1/recipes/' + id);
  }
}
