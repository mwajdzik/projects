import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {RecipeComponent} from './recipe/recipe.component';
import {RecipesListComponent} from './recipes-list/recipes-list.component';
import {RecipeService} from './recipe.service';
import {RecipeResolverService} from './recipe/recipe-resolver.service';
import {FilterPipe} from './recipes-list/filter.pipe';

const appRoutes: Routes = [
  {
    path: 'recipes', component: RecipesListComponent, children: [
      {path: ':id', component: RecipeComponent, resolve: {recipe: RecipeResolverService}}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    RecipesListComponent,
    FilterPipe
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, RecipeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
