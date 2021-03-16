import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {AngularFirestore} from "angularfire2/firestore";
import {map} from "rxjs/operators";


@Injectable()
export class MemeProvider {

  private memes: any = [];
  memeSubject = new Subject<any[]>();

  constructor(private db: AngularFirestore)
  {
    this.getAllMemes();
  }

  emitMemeSubject() {
    this.memeSubject.next(this.memes.slice());
  }

  //Everythings is about firebase

  /**
   * Get meme with an ID
   * @param  id
   */
  getMemeById(id: string) {
    for (const meme of this.memes) {
      if (meme.id === id) {
        return meme;
      }
    }
  }

  /**
   * Get all memes
   */
  getAllMemes() {
    return this.db.collection('memes').snapshotChanges().pipe(
      map(changes => {
        return changes.map(doc => {
          return {
            id: doc.payload.doc.id,
            data: doc.payload.doc.data()
          };
        });
      })
    ).subscribe(res => {
      this.memes = res;
      this.emitMemeSubject();
    });
  }

  /**
   * create new meme in Firebase
   */
  saveNewMeme(meme: any) {
    return new Observable(obs => {
      this.db.collection('memes').add(meme).then(() => {
        console.log('success');
        obs.next();
      });
    });
  }

  delete(id: any) {
    this.db.doc(`memes/${id}`).delete();
  }

  update(meme: any, id: any) {
    return new Observable(obs => {
      this.db.doc(`memes/${id}`).update(meme);
      obs.next();
    });
  }


}
