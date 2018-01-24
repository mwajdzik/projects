import {Injectable} from '@angular/core';
import {Ticker} from '../model/ticker';

@Injectable()
export class TickerService {

  getAllTickers() {
    return [
      {
        name: 'Observed',
        tickers: [
          new Ticker('gbk', 'GetBack'),
          new Ticker('kru', 'Kruk'),
          new Ticker('opl', 'Orange'),
          new Ticker('ida', 'Idea')
        ]
      },
      {
        name: 'Waiting room',
        tickers: [
          new Ticker('tpe', 'Tauron'),
          new Ticker('pko', 'PKOBP'),
          new Ticker('peo', 'Pekao')
        ]
      }
    ];
  }
}
