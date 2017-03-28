import { Injectable, Pipe } from '@angular/core';


@Pipe({
  name: 'decimal'
})
@Injectable()
export class ToDecimal {
   /*
    Takes a value and makes it two-decimal-placed.
   */
  transform(value, args) {
    return value.toFixed(1);
  }
}
