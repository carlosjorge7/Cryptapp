import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoinsComponent } from './components/coins/coins.component';
import { CoinComponent } from './components/coin/coin.component';
import { NavComponent } from './components/nav/nav.component';
import { FilterCoinPipe } from './pipes/filter-coin.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoinsComponent,
    CoinComponent,
    NavComponent,
    FilterCoinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
