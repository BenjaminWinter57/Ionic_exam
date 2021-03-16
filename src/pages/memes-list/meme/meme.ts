import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {MemeProvider} from "../../../providers/meme/meme";

/**
 * Generated class for the MemePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meme',
  templateUrl: 'meme.html',
})
export class MemePage {

  modif: boolean = false;
  public title: string;
  public id: string;
  public meme: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private MEME: MemeProvider,
    private toast: ToastController) {
  }

  ngOnInit(){
    this.title = this.navParams.get('title');
    this.id = this.navParams.get('id');
    this.meme = this.MEME.getMemeById(this.id);
    console.log(this.meme)
  }

  /**
   * Update meme
   */
  onModif(){
    this.MEME.update(this.meme.data, this.meme.id).subscribe(() => {
      const toast = this.toast.create({
        message: 'Vos changement ont été sauvegardées',
        duration: 2000
      });
      toast.present();
      this.modif = false;
    })
  }

  /**
   * Delete
   */
  onDelete(){
    this.MEME.delete(this.id);
    this.navCtrl.pop();
  }

  /**
   * Ask for Update
   */
  onGoAccessModif() {
    let alert = this.alertCtrl.create({
      title: 'Etes-vous sur de vouloir modifier ?',
      subTitle: 'Vous rendrez possible la modification',
      buttons: [
        {
          text: "Annuler",
          role: 'Cancel'
        },
        {
          text: "Confirmer",
          handler: () => this.modif = !this.modif
        }
      ]
    });

    alert.present();
  }

}
