import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { EscultometroPage } from '../pages/escultometro/escultometro';
import { BibliotecaPage } from '../pages/biblioteca/biblioteca';
import { LogrosPage } from '../pages/logros/logros';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { CalendarioPage } from '../pages/calendario/calendario';
import { PortafoliosPage } from '../pages/portafolios/portafolios';
import { globalVariables } from '../pages/globalVariables';
import { AdministracionPage } from '../pages/administracion/administracion';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Elementos del sidebar
    this.pages = [
      { title: 'Inicio', component: MainPage, icon: "home" },
      { title: 'Escultómetro', component:  EscultometroPage, icon: "stats"},
      { title: 'Portafolios', component:  PortafoliosPage, icon: "book"},
      { title: 'Calendario', component:  CalendarioPage, icon: "calendar"},
      { title: 'Biblioteca', component:  BibliotecaPage, icon: "school"},
      { title: 'Logros', component:  LogrosPage, icon: "trophy"},
      { title: 'Configuración', component:  ConfiguracionPage, icon: "cog"},
      { title: 'Desconectar', component:  HomePage, icon: "log-out"}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  //Superuser
  isSuperUser(){
    if(globalVariables.ROL > 0)
      return true;
    else
      return false;
  }

  openControlPanel(){
    this.nav.setRoot(AdministracionPage);
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
