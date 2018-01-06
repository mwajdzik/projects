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
      const nameMatches = recipe.name && recipe.name.indexOf(filterString) !== -1;
      const categoryMatches = recipe.primaryCategory && recipe.primaryCategory.title.indexOf(filterString) !== -1;
      return nameMatches || categoryMatches;
    });
  }
}
