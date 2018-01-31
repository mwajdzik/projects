import {Component, DoCheck} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipePage} from "../recipe/recipe";
import {RecipesPage} from "../recipes/recipes";

import * as _ from 'lodash';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage implements DoCheck {

  categories: any = [];
  recipes: any = [];
  searchString = '';

  constructor(public navCtrl: NavController, private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    this.recipeService.getCategories()
      .subscribe((categories) => {
        return this.categories = _.sortBy(categories, 'name');
      });
  }

  ngDoCheck(): void {
    if (this.recipesMode(this.searchString) ) {
      this.recipes = this.recipeService.getRecipesByName(this.searchString);
    }
  }

  recipeSelected(recipe) {
    this.navCtrl.push(RecipePage, recipe);
  }

  categorySelected(category) {
    this.navCtrl.push(RecipesPage, category);
  }

  recipesMode(searchString: string) {
    return searchString && searchString.length >= 3;
  }
}
