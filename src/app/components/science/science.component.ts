import { Component, OnInit } from '@angular/core';
import { ResourcesService } from '../resources/resources.service';

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
  mDeveloped: boolean = false;

  constructor(private service: ResourcesService) { }

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
  }
  mines() {
    debugger
    if (this.mDeveloped == false && this.mWCost <= this.actualWood && this.mSCost <= this.actualStone) {
      //show Mine building
      this.service.$wood.next(this.actualWood - this.mWCost);
      this.service.$stone.next(this.actualStone - this.mSCost);
      this.mDeveloped = true;
    }
  }
}
