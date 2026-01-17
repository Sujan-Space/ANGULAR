import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency',
  standalone: true
})
export class MycurrencyPipe implements PipeTransform {

  transform(value: number, symbol: string = '₹'): string {
    if (value == null) {
      return '';
    }

    return symbol + value.toLocaleString('en-IN', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
