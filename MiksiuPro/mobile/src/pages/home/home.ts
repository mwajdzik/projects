import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

import * as _ from 'lodash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipes: any = [];
  searchString = '';

  constructor(public navCtrl: NavController, private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    this.recipeService.getRecipes()
      .subscribe((recipes) => {
        return this.recipes = _.sortBy(recipes, 'name');
      });
  }

  recipeSelected(recipe) {
  }
}
