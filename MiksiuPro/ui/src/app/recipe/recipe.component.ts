import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public recipe;

  constructor(private route: ActivatedRoute,
              private router: Router,
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

  likeRecipe() {
  }

  addToShoppingCard() {
  }
}
