import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import * as _ from 'lodash';

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
      .subscribe(res => {
        this.recipes = _.sortBy(res, 'name');
      });
  }
}
