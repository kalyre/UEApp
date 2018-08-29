import { Component } from '@angular/core';
import { NavController, LoadingController, MenuController } from 'ionic-angular';
import { Http } from '@angular/http';

import { pbkdf2 } from 'pbkdf2';
import { globalVariables } from '../globalVariables';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //Input del usuario
  username : string;
  password: string;

  //Resultado de DB
  userData: any;

  //Tabs:
  mymodel: string;

  type: string = 'password';
  showPass: boolean = false;

  constructor(public navCtrl: NavController, public http: Http, public loadingCtrl: LoadingController, public menuCtrl: MenuController) {
    //Evita el swip del menú para esta página
     this.menuCtrl.enable(false, 'myMenu');

    //Asigna el tab selecionado por defecto
    this.mymodel = "login";
  }

  trampa(){
    this.navCtrl.setRoot(MainPage);
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
            this.navCtrl.setRoot(MainPage);
          }else{
            loader.dismiss();
          }
        });
      });
    });
  }

  register(){

  }

  showPassword() {
    this.showPass = !this.showPass;

    if(this.showPass){
      this.type = 'text';
    } else {
      this.type = 'password';
    }
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
