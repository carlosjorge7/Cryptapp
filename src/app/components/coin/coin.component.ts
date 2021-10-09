import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';
import { ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coinDetail: any;

  loading: boolean = false;
  loadingChart: boolean = false;

  constructor(private coinService: CoinService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params; // aqui va el lA MONEDA
    const idMoneda = params.id; // params['id']

    if(idMoneda) {
      this.coinService.getCoin(idMoneda)
        .subscribe(res => {
          this.coinDetail = res;
          this.loading = true
          console.log(this.coinDetail)
      }, err => console.log(err))
    }

    // Aqui recupero los datos de la grafica
    this.coinService.getCoinChart(idMoneda, 'eur', '1')
    .subscribe(res => {
      let totalItems = res['prices'].length;
      let arrayPrices = new Array();

      for(let i = 0; i < totalItems; i++) {
        arrayPrices.push(res['prices'][i][1]);
        console.log(arrayPrices[i])
      }

      const $grafica: any = document.querySelector("#coinsChart");
      const etiquetas = arrayPrices
      const medias = {
          label: 'Evolución diaria',
          data: arrayPrices,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 0.25)', 
          borderWidth: 0.25
      };
      new Chart($grafica, {
          type: 'line',
          data: {
              labels: etiquetas,
              datasets: [
                medias
              ]
          },
          options: {
            
            scales: {
                yAxes: [{
                      ticks: {
                          min: this.coinDetail.low_24h.eur,
                          max: this.coinDetail.high_24h.eur,
                          stepSize: 10
                      }
                  }]
            }
        }
      }); 
  }); 

  }

  



}
