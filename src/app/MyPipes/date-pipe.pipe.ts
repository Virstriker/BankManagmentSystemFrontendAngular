import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let a = value.split("T",1)
    return a[0];
  }

}
