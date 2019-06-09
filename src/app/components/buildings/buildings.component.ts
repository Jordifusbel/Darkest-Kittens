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
  LCWCost: number = 10;
  LClvl: number = 0;
  //Quarry
  QWCost: number = 50;
  Qlvl: number = 0;
  constructor(private service: ResourcesService) { }

  ngOnInit() {
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

  buildLC() {
    if (this.LCWCost <= this.actualWood) {
      this.LClvl = this.LClvl + 1;
      this.service.$wood.next(this.actualWood - this.LCWCost);
      this.service.$woodPS.next(this.actualWoodPS + 5);
      this.LCWCost = this.LCWCost * 2;
    }
  }
  buildQ() {
    if (this.QWCost <= this.actualWood) {
      this.Qlvl = this.Qlvl + 1;
      this.service.$wood.next(this.actualWood - this.QWCost);
      this.service.$stonePS.next(this.actualStonePS + 5);
      this.QWCost = this.QWCost * 2;
    }
  }
}
