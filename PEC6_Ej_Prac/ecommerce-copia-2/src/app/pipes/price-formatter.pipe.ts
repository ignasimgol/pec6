import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormatter',
  standalone: true
})
export class PriceFormatterPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value)) {
      return '0,00 €';  // Formato por defecto si el valor no es un número
    }
    return `${value.toFixed(2).replace('.', ',')} €`;  // Formato con coma y símbolo €
  }
}
