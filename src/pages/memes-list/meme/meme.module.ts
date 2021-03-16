import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemePage } from './meme';

@NgModule({
  declarations: [
    MemePage,
  ],
  imports: [
    IonicPageModule.forChild(MemePage),
  ],
})
export class MemePageModule {}
