import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { pbkdf2 } from 'pbkdf2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username : string;
  password: string;
  hashedPassword: string;

  constructor(public navCtrl: NavController) {

  }

  // Server: sql2.freemysqlhosting.net
  // Name: sql2251759
  // Username: sql2251759
  // Password: pZ7%yE4*
  // Port number: 3306
  
  login(){
    console.log("User: " + this.username);
    console.log("Password: " + this.password);

    this.encrypt().then(hashed =>{
      this.hashedPassword = hashed;
      console.log("Hashed password: " + this.hashedPassword);
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
