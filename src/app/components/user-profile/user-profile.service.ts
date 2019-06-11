import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private firestore: AngularFirestore, private authService: AuthService) { }

  public saveData(savedData) {
    // subscribimos al authService
    this.authService.user$.subscribe(data => {
      // obtenemos el valor del uid del usuario
      var userUid = data.uid;


      // utilizaremos este uid como id del objeto 'partida guardada' .doc() y seteamos .set() el objeto de la partida
      return this.firestore.collection('savedGame').doc(userUid).set({ datos: savedData });
      // donde pone {datos:''} metes tu objeto
    });
  }

  public getData() {
    // subscribimos al authService
 
  }
}
