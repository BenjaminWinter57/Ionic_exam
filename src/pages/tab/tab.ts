import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {MemesListPage} from "../memes-list/memes-list";
import {AboutPage} from "../about/about";
import {PhotosPage} from "../photos/photos";

@IonicPage()
@Component({
  selector: 'page-tab',
  templateUrl: 'tab.html',
})
export class TabPage {
  home = HomePage;
  memes = MemesListPage;
  about = AboutPage;
  photos = PhotosPage;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

}
