import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import { pbkdf2 } from 'pbkdf2';
import { globalVariables } from '../globalVariables';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password: string;
  userData: any;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController) {

  }

  login(){
    let loader = this.loadingCtrl.create({
      content: 'Verificando...'
    });

    loader.present().then(()=>{
      this.encrypt().then(hashed =>{
        this.isOkLogin(hashed).then( isOkLogin => {
          if(isOkLogin){
            loader.dismiss();
            this.navCtrl.push(MainPage);
            // console.log("Logged!");
          }else{
            loader.dismiss();
          }
        });
      });
    });
  }

  isOkLogin(hashedPassword:string){
    return new Promise <boolean> ((resolve, reject) => {
     this.http.get(globalVariables.PHP_SERVER + "login.php").subscribe( data => {
      this.userData = JSON.parse(data["_body"]);

      for(var idx = 0; idx < this.userData.length; idx++){
        if(this.userData[idx].username == this.username && this.userData[idx].password == hashedPassword)
          resolve(true);
      }
        resolve(false);
     }, err =>{
       console.log(err);
     });
   });
 }

   encrypt(){
    return new Promise <string> ((resolve, reject) => {
      var salt = 'YATakTebyaLyublyuLaura';
      var iterations = 100000;
      var hashed;
      // (password, salt, iterations, keylen, digest, callback)
      pbkdf2(this.password, salt, iterations, 50, 'sha256', function(err, hash){
        if(err){ throw err; }
        hashed = hash.toString('base64');
        resolve(hashed);
      });
    });
  }
}
