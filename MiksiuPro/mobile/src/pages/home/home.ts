import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recipes;

  constructor(public navCtrl: NavController, private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    this.recipeService.getRecipes()
      .subscribe((recipes) => this.recipes = recipes);
  }

  recipeSelected(recipe) {
  }
}
