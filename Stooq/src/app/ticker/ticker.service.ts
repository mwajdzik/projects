import {Injectable} from '@angular/core';
import {Ticker} from '../model/ticker';

@Injectable()
export class TickerService {

  getAllTickers() {
    return [
      {
        name: 'Observed',
        tickers: [
          new Ticker('etl', 'Eurotel'),
          new Ticker('mon', 'Monnari'),
          new Ticker('amc', 'Amica'),
          new Ticker('fte', 'Forte'),
          new Ticker('amb', 'Ambra'),
          new Ticker('urs', 'Ursus'),
          new Ticker('cie', 'Ciech'),
          new Ticker('gbk', 'GetBack'),
          new Ticker('abc', 'ABC Data'),
          new Ticker('kru', 'Kruk'),
          new Ticker('opl', 'Orange'),
          new Ticker('ida', 'Idea'),
          new Ticker('tpe', 'Tauron'),
          new Ticker('pko', 'PKOBP'),
          new Ticker('peo', 'Pekao')
        ]
      }
    ];
  }
}
