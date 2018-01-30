import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TickerService} from './ticker/ticker.service';
import {AuthComponent} from './auth/auth.component';
import {TickerComponent} from './ticker/ticker.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'stooq-stooq'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [TickerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
