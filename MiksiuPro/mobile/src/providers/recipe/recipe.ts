import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import * as _ from 'lodash';
import * as data from '../../data/data.json';
import {Observable} from "rxjs/Observable";
import {Observer} from "rxjs/Observer";

@Injectable()
export class RecipeProvider {

  private recipes;
  private preview;

  constructor(public http: HttpClient) {
    this.recipes = _.keyBy(data, (r) => {
      return r.id;
    });

    this.preview = _.map(data, (r) => {
      return {id: r.id, name: r.name}
    });
  }

  getRecipes() {
    return Observable.create((observer: Observer<any>) => observer.next(this.preview));
  }

  getRecipeById(id: string) {
    return Observable.create((observer: Observer<any>) => observer.next(this.recipes[id]));
  }
}
