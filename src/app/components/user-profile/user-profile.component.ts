import { async } from '@angular/core/testing';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';
import { ResourcesService } from '../resources/resources.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  data: any = {}

  constructor(public auth: AuthService, private profileService: UserProfileService, private resourcesService: ResourcesService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.resourcesService.$wood.subscribe(wood => {
      this.data.actualWood = wood;
    });
    this.resourcesService.$woodPS.subscribe(woodPS => {
      this.data.actualWoodPS = woodPS;
    })
    this.resourcesService.$stone.subscribe(stone => {
      this.data.actualStone = stone;
    });
    this.resourcesService.$stonePS.subscribe(stonePS => {
      this.data.actualStonePS = stonePS;
    });
    this.resourcesService.$iron.subscribe(iron => {
      this.data.actualIron = iron;
    });
    this.resourcesService.$ironPS.subscribe(ironPS => {
      this.data.actualIronPS = ironPS;
    });
  }

  saveGame() {
    this.profileService.saveData(this.data);
    alert("Game saved C:");
  }
  loadGame() {
    // let data;
    // let promesa = new Promise((resolve, reject) => { data = this.profileService.getData() });
    // promesa.then(async (response) => { await this.loadGameData(response); });
    var userUid = localStorage.getItem('userUid');
    console.log(userUid);
    this.firestore.collection('savedGame').doc(userUid).get().subscribe(docs => { 
      var data = docs.get('datos');
      this.loadGameData(data);
    });
  }
  loadGameData(allData) {
    this.resourcesService.$wood.next(allData.actualWood);
    this.resourcesService.$stone.next(allData.actualStone);
    this.resourcesService.$iron.next(allData.actualIron);
    this.resourcesService.$woodPS.next(allData.actualWoodPS);
    this.resourcesService.$stonePS.next(allData.actualStonePS);
    this.resourcesService.$ironPS.next(allData.actualIronPS);

  }
}
