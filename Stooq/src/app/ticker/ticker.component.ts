import {Component, Input, OnInit} from '@angular/core';
import {Ticker} from '../model/ticker';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css']
})
export class TickerComponent implements OnInit {

  @Input() ticker: Ticker;

  constructor() {
  }

  ngOnInit() {
  }

  getBadgeColor(ticker: Ticker) {
    if (ticker.ranking < 0) {
      return 'black';
    } else if (ticker.ranking < 3) {
      return 'orange';
    } else {
      return 'green';
    }
  }
}
