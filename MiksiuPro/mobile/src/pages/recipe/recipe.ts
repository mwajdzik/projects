import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage {

  recipe = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeService: RecipeProvider) {
  }

  ionViewDidLoad() {
    this.recipeService.getRecipeById(this.navParams.data.id)
      .subscribe((recipe) => this.recipe = recipe);
  }

  getIngredientText(ingredient) {
    let result = '';

    if (ingredient.quantity.value) {
      result += ingredient.quantity.value + ' ';
    }

    if (ingredient.quantity.from) {
      result += 'od ' + ingredient.quantity.from + ' ';
    }

    if (ingredient.quantity.to) {
      result += 'do ' + ingredient.quantity.to + ' ';
    }

    if (ingredient.recipeIngredientUnits.length > 0) {
      result += ingredient.recipeIngredientUnits[0].notation + ' ';
    }

    if (ingredient.notation) {
      result += ingredient.notation + ' ';
    }

    if (ingredient.preparation) {
      result += ingredient.preparation;
    }

    return result;
  }
}
