import { Pipe, PipeTransform } from '@angular/core';
import { Coin } from '../models/Coin';

@Pipe({
  name: 'filterCoin'
})
export class FilterCoinPipe implements PipeTransform {

 
  transform(coins: Coin[], valor: string): Coin[] {
    if(valor.length == 0){
      return coins;
    }
    valor = valor.toLowerCase();

    // tipo foreach --> la funcion filter devuelve al array filtrado
    return coins.filter((coin) => {
      return coin.name.toLowerCase().includes(valor);
    });
  }

}
