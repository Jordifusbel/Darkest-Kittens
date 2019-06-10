import { Component, OnInit, Input } from '@angular/core';
import { ResourcesService } from '../resources/resources.service';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  //Resources
  actualWood: number;
  actualStone: number;
  actualIron: number;
  //RespourcesPS
  actualWoodPS: number;
  actualStonePS: number;
  actualIronPS: number;
  //Lumber Camp
  lCWCost: number = 9;
  lCLvl: number = 0;
  //Quarry
  qWCost: number = 45;
  qLvl: number = 0;
  //Mine
  mDev: boolean = true;
  mWCost: number = 100;
  mSCost: number = 50;
  mLvl: number = 0;
  //Armory
  aDev: boolean = true;
  aWCost: number = 250;
  aSCost: number = 100;
  aICost: number = 100;
  aLvl: number = 0;
  //Guild
  gDev: boolean = true;
  gWCost: number = 1000;
  gSCost: number = 500;
  gICost: number = 100
  gLvl: number = 0;
  constructor(private service: ResourcesService) { }

  ngOnInit() {
    if (localStorage.getItem("buildingData") != undefined) {
      console.log("Hola");
      let values = JSON.parse(localStorage.getItem("buildingData"));
      console.log(values);
      this.lCWCost = parseInt(values.lCWCost);
      this.lCLvl = values.lCLvl;
      this.qWCost = values.qWCost;
      this.qLvl = values.qLvl;
      this.mWCost = values.mWCost;
      this.mSCost = values.mSCost;
      this.mLvl = values.mLvl;
    }
    if (localStorage.getItem("mDeveloped") != undefined) {
      let mineVal = JSON.parse(localStorage.getItem("mDev"));
      if (mineVal == true) {
        this.mDev = true;
      }
    }
    if (localStorage.getItem("aDeveloped") != undefined) {
      let mineVal = JSON.parse(localStorage.getItem("aDev"));
      if (mineVal == true) {
        this.aDev = true;
      }
    }
    if (localStorage.getItem("gDeveloped") != undefined) {
      let mineVal = JSON.parse(localStorage.getItem("gDev"));
      if (mineVal == true) {
        this.gDev = true;
      }
    }
    this.service.$wood.subscribe(wood => {
      this.actualWood = wood;
    });
    this.service.$woodPS.subscribe(woodPS => {
      this.actualWoodPS = woodPS;
    })
    this.service.$stone.subscribe(stone => {
      this.actualStone = stone;
    });
    this.service.$stonePS.subscribe(stonePS => {
      this.actualStonePS = stonePS;
    });
    this.service.$iron.subscribe(iron => {
      this.actualIron = iron;
    });
    this.service.$ironPS.subscribe(ironPS => {
      this.actualIronPS = ironPS;
    })
  }
  ngOnDestroy(): void {
    let buildingData = {
      "lCWCost": this.lCWCost,
      "lCLvl": this.lCLvl,
      "qWCost": this.qWCost,
      "qLvl": this.qLvl,
      "mWCost": this.mWCost,
      "mSCost": this.mSCost,
      "mLvl": this.mLvl,
      "aWCost": this.aWCost,
      "aSCost": this.aSCost,
      "aICost": this.aICost,
      "aLvl": this.aLvl,
      "gWCost": this.gWCost,
      "gSCost": this.gSCost,
      "gICost": this.gICost,
      "gLvl": this.gLvl
    };
    localStorage.setItem("buildingData", JSON.stringify(buildingData));
  }

  buildLC() {
    if (this.lCWCost <= this.actualWood) {
      this.lCLvl = this.lCLvl + 1;
      this.service.$wood.next(this.actualWood - this.lCWCost);
      this.service.$woodPS.next(this.actualWoodPS + 5);
      this.lCWCost = this.lCWCost * 2;
    }
  }
  disabledLC() {
    return this.actualWood <= this.lCWCost;
  }
  buildQ() {
    if (this.qWCost <= this.actualWood) {
      this.qLvl = this.qLvl + 1;
      this.service.$wood.next(this.actualWood - this.qWCost);
      this.service.$stonePS.next(this.actualStonePS + 3);
      this.qWCost = this.qWCost * 2;
    }
  }
  disabledQ() {
    return this.actualWood <= this.qWCost;
  }
  buildM() {
    if (this.mWCost <= this.actualWood && this.mSCost <= this.actualStone) {
      this.mLvl = this.mLvl + 1;
      this.service.$wood.next(this.actualWood - this.mWCost);
      this.service.$stone.next(this.actualStone - this.mSCost);
      this.service.$ironPS.next(this.actualIronPS + 2);
      this.mWCost = this.mWCost * 2;
      this.mSCost = this.mSCost * 2;
    }
  }
  disabledM(){
    return !(this.actualWood >= this.mWCost && this.actualStone >= this.mSCost);
  }
  buildA() {
    if (this.aWCost <= this.actualWood && this.aSCost <= this.actualStone && this.aICost <= this.actualIron) {
      this.aLvl = this.aLvl + 1;
      this.service.$wood.next(this.actualWood - this.aWCost);
      this.service.$stone.next(this.actualStone - this.aSCost);
      this.service.$iron.next(this.actualIron - this.aICost);
      this.aWCost = this.aWCost * 2;
      this.aSCost = this.aSCost * 2;
      this.aICost = this.aICost * 2;
    }
  }
  disabledA() {
    return this.actualWood <= this.aWCost && this.actualStone <= this.aSCost && this.actualIron <= this.aICost;
  }
  buildG() {
    if (this.gWCost <= this.actualWood && this.gSCost <= this.actualStone && this.gICost <= this.actualIron) {
      this.gLvl = this.gLvl + 1;
      this.service.$wood.next(this.actualWood - this.gWCost);
      this.service.$stone.next(this.actualStone - this.gSCost);
      this.service.$stone.next(this.actualIron - this.gICost);
      this.gWCost = this.gWCost * 2;
      this.gSCost = this.gSCost * 2;
      this.gICost = this.gICost * 2;
    }
  }
  disabledG() {
    return this.actualWood <= this.gWCost && this.actualStone <= this.gSCost && this.actualIron <= this.gICost;
  }
}
