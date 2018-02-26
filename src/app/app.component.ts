import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { AuthService } from './providers/auth.service';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
//
// import * as firebase from 'firebase/app';
// import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // private isLoggedIn: Boolean;
  // private user_displayName: String;
  // private user_email: String;
  // private user: any;
  //
  // items: FirebaseListObservable<any[]>;
  //
  // constructor(public afAuth: AngularFireAuth,
  //             public _authService: AuthService,
  //             private router: Router,
  //             private db: AngularFireDatabase) {
  //
  //   this.items = db.list('/items');
  //   this.user = afAuth.authState;
  //   afAuth.authState.subscribe((user: firebase.User) => {
  //       if (user == null) {
  //           console.log('Logged out');
  //           this.isLoggedIn = false;
  //           this.user_displayName = '';
  //           this.user_email = '';
  //           this.router.navigate(['login']);
  //         } else {
  //           this.isLoggedIn = true;
  //           this.user_displayName = user.displayName;
  //           this.user_email = user.email;
  //           console.log('Logged in');
  //           console.log(user);
  //           this.router.navigate(['']);
  //         }
  //     }
  //   );
  // }
  //
  // logout() {
  //   this._authService.logout().then((data) => {
  //     this.router.navigate(['login']);
  //   });
  // }

}
