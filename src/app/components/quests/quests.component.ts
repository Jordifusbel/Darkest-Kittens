import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kittens/kitten.interface';
import { KittensService } from '../kittens/kittens.service';
import { ResourcesService } from 'src/app/components/resources/resources.service';
import { QuestsService } from 'src/app/components/quests/quests.service';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.css']
})
export class QuestsComponent implements OnInit {
  //Resources
  actualWood: number;
  actualStone: number;
  actualIron: number;
  //Quest timers
  wTime: number = 250;
  sTime: number = 500;
  iTime: number = 1000;
  //Party
  party: Kitten[] = [];
  //Quest
  qInProg: boolean = false;
  qTime: number = 0;

  constructor(private service: KittensService, private resourcesService: ResourcesService, private timeService: QuestsService) { }

  ngOnInit() {
    this.resourcesService.$wood.subscribe(wood => {
      this.actualWood = wood;
    });
    this.resourcesService.$stone.subscribe(stone => {
      this.actualStone = stone;
    });
    this.resourcesService.$iron.subscribe(iron => {
      this.actualIron = iron;
    });
    this.service.$kittens.subscribe(kittens => {
      this.party = kittens;
    })
  }
  partyAvailable() {
    return !(this.party.length <= 1);
  }
  sendW() {
    if (this.party.length > 0) {
      this.qInProg = true;
      this.qTime = 500;
      setInterval(() => {
        if (this.qTime > 0) {
          this.qTime--;
          this.timeService.$time.next(this.qTime);
        }
        if (this.qTime == 1) {
          this.resourcesService.$wood.next(this.actualWood + (500 * this.party.length));
          this.qInProg = false;
        }
      }, 1000)

    }
  }
  disabledW() {
    return !(this.qInProg = true && this.party.length > 0)
  }
  sendS() {
    if (this.party.length > 0) {
      this.qInProg = true;
      this.qTime = 5;
      setInterval(() => {
        if (this.qTime > 0) {
          this.qTime--;
          this.timeService.$time.next(this.qTime);
        }
        if (this.qTime == 1) {
          this.resourcesService.$stone.next(this.actualStone + (500 * this.party.length));
          this.qInProg = false;
        }
      }, 1000)
    }
  }
  disabledS() {
    return !(this.qInProg = true && this.party.length > 0)
  }
  sendI() {
    setInterval(() => {
      this.qTime = 200;
      if (this.qTime > 0) {
        this.qInProg = true;
        this.qTime--;
        this.timeService.$time.next(this.qTime);
      }
      if (this.qTime == 1) {
        this.resourcesService.$iron.next(this.actualIron + (500 * this.party.length));
        this.qInProg = false;
      }
    }, 1000)
  }
  disabledI() {
    return !(this.qInProg = true && this.party.length > 0)
  }
}
