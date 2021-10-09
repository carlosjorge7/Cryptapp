import { Component, OnInit } from '@angular/core';
import { CoinService} from '../../services/coin.service';
import { Coin } from '../../models/Coin'

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = []; 

  loading: boolean = false;

  textoBuscar: string = '';

  constructor(private coinService: CoinService) { }

  ngOnInit() {
    this.getAllCoins();
  }

  buscarCoin(event: any) {
    const valor = event.target.value;
    this.textoBuscar = valor;
  }

  getAllCoins() {
    let tipo = 'eur';
    this.coinService.getAllCoins(tipo)
      .subscribe(res => {
        this.coins = res;
        this.loading = true;

    }, err => console.log(err));
  }

}
