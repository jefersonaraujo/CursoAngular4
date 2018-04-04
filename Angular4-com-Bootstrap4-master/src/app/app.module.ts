import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';

//Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyA5CcpDCA4defeFe-lrnpbqsbjYD8sbz_k",
  authDomain: "htools-smart.firebaseapp.com",
  databaseURL: "https://htools-smart.firebaseio.com",
  storageBucket: "htools-smart.appspot.com",
  messagingSenderId: "919478426791"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
     AngularFireAuthModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
