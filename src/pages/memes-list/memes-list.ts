import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Subscription} from "rxjs";
import {MemeNewPage} from "./meme-new/meme-new";
import {MemeProvider} from "../../providers/meme/meme";
import {MemePage} from "./meme/meme";

@IonicPage()
@Component({
  selector: 'page-memes-list',
  templateUrl: 'memes-list.html',
})
export class MemesListPage implements OnInit {

  public memes = [];
  memeSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private MEME: MemeProvider
  ) {
  }

  ngOnInit()
  {
    this.memeSubscription = this.MEME.memeSubject.subscribe((listMeme) => {
      console.log(listMeme)
      this.memes = listMeme;
    })
  }

  /**
   * Send people to an another page to create some meme
   */
  onGoToCreate()
  {
    this.navCtrl.push(MemeNewPage);
  }

  /**
   * Send people to an another page to watch and update some meme
   */
  onGoToMeme(memeName: string, id: string)
  {
    this.navCtrl.push(MemePage, {title: memeName, id: id})
  }

}
