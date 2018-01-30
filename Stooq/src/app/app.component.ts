import {Component, OnInit} from '@angular/core';
import {TickerService} from './ticker/ticker.service';
import {Category} from './model/category';

import 'rxjs/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: Category[];

  constructor(private tickerService: TickerService) {
  }

  ngOnInit() {
    this.tickerService.getCategories()
      .subscribe((items: Category[]) => {
        this.items = items;
      });
  }
}
