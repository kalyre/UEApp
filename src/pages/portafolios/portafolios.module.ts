import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortafoliosPage } from './portafolios';

@NgModule({
  declarations: [
    PortafoliosPage,
  ],
  imports: [
    IonicPageModule.forChild(PortafoliosPage),
  ],
})
export class PortafoliosPageModule {}
