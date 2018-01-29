import {Component, OnInit} from '@angular/core';
import {TickerService} from './ticker/ticker.service';
import {Ticker} from './model/ticker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: any;

  constructor(private tickerService: TickerService) {
  }

  ngOnInit() {
    this.data = this.tickerService.getAllTickers();
  }

  onRankUp(ticker: Ticker) {
    ticker.rankUp();
  }

  onRankDown(ticker: Ticker) {
    ticker.rankDown();
  }

  getColor(ticker: Ticker) {
    if (ticker.ranking < 0) {
      return 'black';
    } else if (ticker.ranking < 3) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}
