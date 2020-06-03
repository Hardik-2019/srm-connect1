import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventformPage } from './eventform';

@NgModule({
  declarations: [
    EventformPage,
  ],
  imports: [
    IonicPageModule.forChild(EventformPage),
  ],
})
export class EventformPageModule {}
