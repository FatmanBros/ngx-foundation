import { Pipe, PipeTransform } from '@angular/core';
import { Util } from '../util/utils';

@Pipe({
  name: 'numberWithCommas',
})
export class NumberWithCommasPipe implements PipeTransform {
  transform(val: number): string {
    return Util.numberWithCommas(val);
  }
}
