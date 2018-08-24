import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { globalVariables } from '../globalVariables';

/**
 * Generated class for the AdministracionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-administracion',
  templateUrl: 'administracion.html',
})
export class AdministracionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdministracionPage');
  }

  //Badge
  getNotifications(){
    return globalVariables.NOTIFICATIONS;
  }

  showNotifications(){
    if(globalVariables.ADMIN_HAS_NOTIFICATIONS)
      return true;
    else
      return false;
  }
}
