import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources/resources.service';
import { ScienceService } from './science.service';
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  //Resources
  actualWood: number;
  actualStone: number;
  actualIron: number;
  //RespourcesPS
  actualWoodPS: number;
  actualStonePS: number;
  actualIronPS: number;
  //Mine
  mWCost: number = 100;
  mSCost: number = 50;
  mDevTime: number = 5;//60
  mDeveloped: boolean = false;
  //Guild
  gWCost: number = 1000;
  gSCost: number = 2000;
  gICost: number = 500;
  gDevTime: number = 400;
  gDeveloped: boolean = false;
  //Armory
  aWCost: number = 500;
  aSCost: number = 500;
  aICost: number = 100;
  aDevTime: number = 200;
  aDeveloped: boolean = false;

  constructor(private service: ResourcesService, private timeService: ScienceService) { }

  ngOnInit() {
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
    if (localStorage.getItem("mDev") != undefined) {
      let mineVal = JSON.parse(localStorage.getItem("mDev"));
      if (mineVal.mDev == "true") {
        this.mDeveloped = true;
      }
    }
    if (localStorage.getItem("aDev") != undefined) {
      let mineVal = JSON.parse(localStorage.getItem("aDev"));
      if (mineVal.mDev == "true") {
        this.mDeveloped = true;
      }
    }
  }
  startTimer(time, techName) {
    setInterval(() => {
      if (time > 0) {
        time--;
        this.timeService.$time.next(time);
      }
      if (time == 1) {
        localStorage.setItem(techName, "true")
      }
    }, 1000)
  }
  mines() {
    if (this.mDeveloped == false && this.mWCost <= this.actualWood && this.mSCost <= this.actualStone) {
      this.mDeveloped = true;
      this.service.$wood.next(this.actualWood - this.mWCost);
      this.service.$stone.next(this.actualStone - this.mSCost);
      this.startTimer(this.mDevTime, "mDeveloped");
    }
  }
  disabledM() {
    return !(this.actualWood >= this.mWCost && this.actualStone >= this.mSCost && this.mDeveloped != true);
  }
  guild() {
    if (this.gDeveloped == false && this.gWCost <= this.actualWood && this.gSCost <= this.actualStone && this.gICost <= this.actualIron) {
      this.gDeveloped = true;
      this.service.$wood.next(this.actualWood - this.gWCost);
      this.service.$stone.next(this.actualStone - this.gSCost);
      this.service.$iron.next(this.actualIron - this.gICost);
      this.startTimer(this.gDevTime, "gDeveloped");
    }
  }
  disabledA() {
    return !(this.actualWood >= this.aWCost && this.actualStone >= this.aSCost && this.actualIron >= this.aICost && this.aDeveloped != true);
  }
  armory() {
    if (this.aDeveloped == false && this.aWCost <= this.actualWood && this.aSCost <= this.actualStone && this.aICost <= this.actualIron) {
      this.aDeveloped = true;
      this.service.$wood.next(this.actualWood - this.aWCost);
      this.service.$stone.next(this.actualStone - this.aSCost);
      this.service.$iron.next(this.actualIron - this.aICost);
      this.startTimer(this.aDevTime, "aDeveloped");
    }
  }
  disabledG() {
    return !(this.actualWood >= this.gWCost && this.actualStone >= this.gSCost && this.actualIron >= this.gICost && this.gDeveloped != true);
  }
}