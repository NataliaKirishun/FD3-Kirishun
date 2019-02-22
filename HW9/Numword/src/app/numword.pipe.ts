import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberOfApples'
})
export class NumwordPipe implements PipeTransform {
  transform(value: number, first: string, second: string, third: string): string {
    let dd = value % 100;
    if ((dd >= 11) && (dd <= 19))
      return value + ' '+ third;
    let d = value % 10;
    if (d == 1)
      return value + ' ' +first;
    if ((d >= 2) && (d <= 4))
      return value + ' ' +second;
    return value + ' '+third;
  }
}
