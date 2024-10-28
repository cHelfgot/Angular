import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
