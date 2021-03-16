import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MemeProvider} from "../../../providers/meme/meme";

@IonicPage()
@Component({
  selector: 'page-meme-new',
  templateUrl: 'meme-new.html',
})
export class MemeNewPage {

  public meme: any = {
    title: null,
    image: null,
    alt: null,
    date: null,
    description: null
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private MEME: MemeProvider
  ) {
  }

  /**
   * Add some meme
   */
  onAdd() {
    this.MEME.saveNewMeme(this.meme).subscribe(() => {
      this.meme = {
        title: null,
        image: null,
        alt: null,
        date: null,
        description: null
      };
      this.navCtrl.pop()
    })
  }
}
