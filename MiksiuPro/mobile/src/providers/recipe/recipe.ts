import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import * as data from '../../data/data.json';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";
import {FilterPipe} from "../../pipes/filter/filter";

@Injectable()
export class RecipeProvider {

  private recipes;
  private preview;
  private categories;

  constructor() {
    this.recipes = _.keyBy(data, (r) => {
      return r.id;
    });

    this.categories = _.sortBy(_.uniq(_.map(data, (r) => {
      return r.primaryCategory.title;
    })));

    this.preview = _.map(data, (r) => {
      return {id: r.id, name: r.name, category: r.primaryCategory.title}
    });
  }

  getCategories() {
    return Observable.create((observer: Observer<any>) => observer.next(this.categories));
  }

  getRecipesByCategory(categoryName: string) {
    return Observable.create((observer: Observer<any>) => observer.next(_.filter(this.preview, (r) => {
      return r.category === categoryName;
    })));
  }

  getRecipesByName(name: string) {
    const filter = new FilterPipe();
    return filter.transform(this.preview, name, 'name');
  }

  getRecipes() {
    return Observable.create((observer: Observer<any>) => observer.next(this.preview));
  }

  getRecipeById(id: string) {
    return Observable.create((observer: Observer<any>) => observer.next(this.recipes[id]));
  }
}
