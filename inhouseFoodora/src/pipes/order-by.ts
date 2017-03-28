import { Injectable, Pipe } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'order'
})
@Injectable()
export class OrderBy {
  
  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a: any, b: any) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
