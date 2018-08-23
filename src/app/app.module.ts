import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { EscultometroPage } from '../pages/escultometro/escultometro';
import { BibliotecaPage } from '../pages/biblioteca/biblioteca';
import { ConfiguracionPage } from '../pages/configuracion/configuracion';
import { LogrosPage } from '../pages/logros/logros';
import { CalendarioPage } from '../pages/calendario/calendario';
import { PortafoliosPage } from '../pages/portafolios/portafolios';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    EscultometroPage,
    BibliotecaPage,
    ConfiguracionPage,
    LogrosPage,
    CalendarioPage,
    PortafoliosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    EscultometroPage,
    BibliotecaPage,
    ConfiguracionPage,
    LogrosPage,
    CalendarioPage,
    PortafoliosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
