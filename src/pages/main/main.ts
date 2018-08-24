import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { globalVariables } from '../globalVariables';
// import { GlobalFunctionsProvider } from '../../providers/global-functions/global-functions';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController,
    // public globalFunction: GlobalFunctionsProvider
  ) {
    //Reactiva el sidemenu
    this.menuCtrl.enable(true, 'myMenu');

    //Comprueba las notificaciones TODO => Activar
    // if(globalVariables.ROL > 1)
    //   globalFunction.adminHasNotifications();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
