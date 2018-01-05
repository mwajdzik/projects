import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  public recipes;
  public filteredName = '';

  constructor(private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.recipeService.getRecipes()
      .subscribe(res => this.recipes = res);
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
    return recipe.difficulty && recipe.difficulty[0];
  }
}
