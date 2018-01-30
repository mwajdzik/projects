import {Ticker} from './ticker';

export class Category {

  constructor(public id: number,
              public name: string,
              public tickers: Ticker[]) {
  }
}
