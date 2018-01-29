export class Ticker {

  public ranking = 0;

  constructor(public symbol: string,
              public name: string) {
  }

  public getUrl() {
    return 'https://picsum.photos/500/300/?random';
    // return 'https://stooq.pl/c/?s=' + this.symbol + '&c=1m&t=c&a=ln&b';
  }

  public rankUp() {
    this.ranking++;
  }

  public rankDown() {
    this.ranking--;
  }
}
