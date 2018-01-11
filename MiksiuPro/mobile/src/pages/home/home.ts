import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RecipeProvider} from "../../providers/recipe/recipe";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  recipes;

  constructor(public navCtrl: NavController, private recipeService: RecipeProvider) {
  }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  recipeSelected(recipe) {
  }
}
