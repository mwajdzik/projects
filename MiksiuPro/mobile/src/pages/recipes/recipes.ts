import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

import * as _ from 'lodash';
import {RecipePage} from "../recipe/recipe";

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  recipes: any = [];
  searchString = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    let category = this.navParams.data;

    this.recipeService.getRecipesByCategory(category)
      .subscribe((recipes) => {
        return this.recipes = _.sortBy(recipes, 'name');
      });
  }

  recipeSelected(recipe) {
    this.navCtrl.push(RecipePage, recipe);
  }
}
