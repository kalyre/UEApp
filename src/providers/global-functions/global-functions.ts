import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalVariables } from '../../pages/globalVariables';

@Injectable()
export class GlobalFunctionsProvider {
  data:any;

  constructor(public http: HttpClient) {
    console.log('Hello GlobalFunctionsProvider Provider');
  }


  adminHasNotifications(){
    return new Promise <boolean> ((resolve, reject) => {
     this.http.get(globalVariables.PHP_SERVER + "login.php").subscribe( data => {
      this.data = JSON.parse(data["_body"]);
      var countNotifications = this.data.notifications;

      //Controla si se muestra el badge o no
      if(countNotifications > 0)
        globalVariables.ADMIN_HAS_NOTIFICATIONS = true;
      else
        globalVariables.ADMIN_HAS_NOTIFICATIONS = false;

      globalVariables.NOTIFICATIONS = countNotifications;
      resolve();
     }, err =>{
       console.log(err);
     });
   });
 }
}
