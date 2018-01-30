import {Component} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-auth',
  template: `
    <li *ngIf="afAuth.authState | async as user; else showLogin">
      <span style="margin-right: 20px; margin-top: 4px; font-size: large;">{{ user.displayName }}</span>
      <span class="pull-right">
        <button class="btn btn-primary"
                (click)="logout()">Logout
        </button>
      </span>
    </li>

    <ng-template #showLogin>
      <li>
        <button class="btn btn-primary"
                (click)="login()">Login
        </button>
      </li>
    </ng-template>
  `,
})
export class AuthComponent {
  constructor(public afAuth: AngularFireAuth) {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
