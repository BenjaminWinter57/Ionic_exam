import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemeNewPage } from './meme-new';

@NgModule({
  declarations: [
    MemeNewPage,
  ],
  imports: [
    IonicPageModule.forChild(MemeNewPage),
  ],
})
export class MemeNewPageModule {}
