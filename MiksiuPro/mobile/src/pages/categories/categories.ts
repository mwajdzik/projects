import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";
import {RecipePage} from "../recipe/recipe";
import {RecipesPage} from "../recipes/recipes";

import * as _ from 'lodash';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {

  categories: any = [];

  constructor(public navCtrl: NavController, private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    this.recipeService.getCategories()
      .subscribe((categories) => {
        return this.categories = _.sortBy(categories, 'name');
      });
  }

  recipeSelected(recipe) {
    this.navCtrl.push(RecipePage, recipe);
  }

  categorySelected(category) {
    this.navCtrl.push(RecipesPage, category);
  }
}
