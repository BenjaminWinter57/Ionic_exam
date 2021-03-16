import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemesListPage } from './memes-list';

@NgModule({
  declarations: [
    MemesListPage,
  ],
  imports: [
    IonicPageModule.forChild(MemesListPage),
  ],
})
export class MemesListPageModule {}
