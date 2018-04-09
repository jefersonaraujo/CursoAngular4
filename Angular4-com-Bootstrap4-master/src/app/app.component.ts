import { Component } from '@angular/core';

//Firebase
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  email:string;
  senha:string;

  constructor(public afAuth: AngularFireAuth){
  this.user= this.afAuth.authState;
  }

loginFacebook(){
  this.afAuth.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
}

loginEmail(){
  firebase.auth().signInWithEmailAndPassword(this.email, this.senha).catch((erro:any)=>{
    console.log(erro);

  });
}

loginGithub(){
  this.afAuth.auth.signInWithPopup( new firebase.auth.GithubAuthProvider());
}
sair(){
  this.afAuth.auth.signOut();

}
}
