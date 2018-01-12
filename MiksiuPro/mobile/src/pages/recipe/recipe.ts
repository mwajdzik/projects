import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {

  recipe = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private recipeService: RecipeProvider) {
  }

  ngOnInit() {
    this.recipeService.getRecipeById(this.navParams.data.id)
      .subscribe((recipe) => {
        this.recipe = recipe;
      });
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

  priceLevel(recipe) {
    switch (recipe.priceLevel) {
      case 'LOW':
        return '$';
      case 'MEDIUM':
        return '$ $';
      case 'HIGH':
        return '$ $ $';
      default:
        return recipe.priceLevel;
    }
  }

  difficulty(recipe) {
    switch (recipe.difficulty) {
      case 'EASY':
        return 'Łatwy';
      case 'MEDIUM':
        return 'Średni';
      case 'ADVANCED':
        return 'Trudny';
      default:
        return recipe.difficulty;
    }
  }
}
