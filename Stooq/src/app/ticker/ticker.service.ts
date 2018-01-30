import {Injectable} from '@angular/core';
import {Ticker} from '../model/ticker';
import {Category} from '../model/category';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable()
export class TickerService {

  private itemsCollection: AngularFirestoreCollection<Category>;

  constructor(public db: AngularFirestore) {
    this.itemsCollection = this.db.collection<Category>('stooq-tickers');
  }

  getCategories() {
    return this.itemsCollection.valueChanges().map((categories: any) => {
      return categories.map(c => {
        const tickers = c.tickers.map((t: any) => {
          return new Ticker(t.symbol, t.name);
        });
        return new Category(c.id, c.name, tickers);
      });
    });
  }

  // storeCategories(categories: Category[]) {
  //   const categoriesToSave = categories.map(c => {
  //     const newCat: any = Object.assign({}, c);
  //     newCat.tickers = c.tickers.map((t) => Object.assign({}, t));
  //     return newCat;
  //   });
  //
  //   this.itemsCollection.add(categoriesToSave);
  // }
}
