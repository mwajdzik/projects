import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {ImagesService} from '../images.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private imagesService: ImagesService,
              private recipeService: RecipeService) {
  }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.recipe = data['recipe'];
    });
  }

  removeRecipe() {
    this.recipeService.removeRecipe(this.recipe.id).subscribe((res) => {
      this.router.navigate(['..'], {relativeTo: this.route});
    });
  }

  getImageUrl() {
    const url = this.recipe.imageSlots[0].url;
    const id = url.substring(_.lastIndexOf(url, '/') + 1, url.length);
    return this.imagesService.getImageUrl(id);
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

  timeActive() {
    return _.find(this.recipe.times, {type: 'ACTIVE_TIME'}).value / 60;
  }

  timeTotal() {
    return _.find(this.recipe.times, {type: 'TOTAL_TIME'}).value / 60;
  }

  likeRecipe() {
  }

  addToShoppingCard() {
  }
}
