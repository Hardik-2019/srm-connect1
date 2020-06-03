import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterestPage } from './interest';

@NgModule({
  declarations: [
    InterestPage,
  ],
  imports: [
    IonicPageModule.forChild(InterestPage),
  ],
})
export class InterestPageModule {}
