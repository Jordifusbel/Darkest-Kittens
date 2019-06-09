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
  lCWCost: number = 10;
  lCLvl: number = 0;
  //Quarry
  qWCost: number = 50;
  qLvl: number = 0;
  //Mine
  mWCost: number = 100;
  mSCost: number = 50;
  mLvl: number = 0;
  constructor(private service: ResourcesService) { }

  ngOnInit() {
    if(localStorage.getItem("buildingData") != undefined){
      console.log("Hola");
      let values = JSON.parse(localStorage.getItem("buildingData"));
      console.log(values);
      this.lCWCost = parseInt(values.lCWCost);
      this.lCLvl = values.lCLvl;
      // this.qWCost = 
      // this.qLvl = 
      // this.mWCost = 
      // this.mSCost = 
      // this.mLvl = 
    }
    this.service.$wood.subscribe(wood => {
      this.actualWood = wood;
    });
    this.service.$woodPS.subscribe(woodPS =>{
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
    this.service.$ironPS.subscribe(ironPS =>{
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
        "mLvl": this.mLvl
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
  buildQ() {
    if (this.qWCost <= this.actualWood) {
      this.qLvl = this.qLvl + 1;
      this.service.$wood.next(this.actualWood - this.qWCost);
      this.service.$stonePS.next(this.actualStonePS + 3);
      this.qWCost = this.qWCost * 2;
    }
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
}
