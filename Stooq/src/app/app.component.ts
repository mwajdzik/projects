import {Component, OnInit} from '@angular/core';
import {TickerService} from './ticker/ticker.service';

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
}
