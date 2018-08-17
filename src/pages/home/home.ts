import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';

import { pbkdf2 } from 'pbkdf2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password: string;
  hashedPassword: string;
  userData: any;

  constructor(public navCtrl: NavController, public http: Http) {

  }

  login(){
    console.log("User: " + this.username);
    console.log("Password: " + this.password);

    this.encrypt().then(hashed =>{
      this.hashedPassword = hashed;
      console.log("Hashed password: " + this.hashedPassword);
      this.getData();
    });
  }

  getData(){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );

    let options = new RequestOptions({ headers: headers });

   this.http.get("http://312cruzdelsur.es/scripts/json.php").subscribe( data => {
     this.userData = JSON.parse(data["_body"]);
     console.log(this.userData);
     console.log("Username: " + this.userData[0].username);
     // console.log("Password: " + this.userData[0].password);
   }, err =>{
     console.log(err);
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
