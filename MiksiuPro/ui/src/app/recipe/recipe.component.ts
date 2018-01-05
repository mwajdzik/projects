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

  likeRecipe() {
  }

  addToShoppingCard() {
  }
}