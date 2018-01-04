import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (!value || value.length === 0) {
      return value;
    }

    return _.filter(value, (recipe) => {
      return recipe.name && recipe.name.indexOf(filterString) !== -1;
    });
  }
}
