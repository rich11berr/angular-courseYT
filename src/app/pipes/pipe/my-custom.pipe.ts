import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom',
  pure: true
})
export class MyCustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}
