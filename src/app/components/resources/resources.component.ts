import { ResourcesService } from './resources.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {
  //Resources List

  //Resources
  wood: number = 0;
  stone: number = 0;
  iron: number = 0;
  meat: number = 0;
  milk: number = 0;
  gold: number = 0;
  coal: number = 0;
  steel: number = 0;
  //Resources  Developed
  woodDev: boolean = true;
  stoneDev: boolean = false;
  ironDev: boolean = false;
  meatDev: boolean = false;
  milkDev: boolean = false;
  goldDev: boolean = false;
  coalDev: boolean = false;
  steelDev: boolean = false;
  //Resources Per Second
  woodPS: number = 50;//2
  stonePS: number = 0;//0
  ironPS: number = 0;//0
  meatPS: number = 0;//0
  milkPS: number = 0;//0
  goldPS: number = 0;//0
  coalPS: number = 0;//0
  steelPS: number = 0;//0

  constructor(private service: ResourcesService) { }

  ngOnInit() {
    this.startTimer();
    this.service.$wood.subscribe(wood => {
      this.wood = wood;
    });
    this.service.$woodPS.subscribe(woodPS => {
      this.woodPS = woodPS;
    });
    this.service.$stone.subscribe(stone => {
      this.stone = stone;
    });
    this.service.$stonePS.subscribe(stonePS => {
      this.stonePS = stonePS;
    });
    this.service.$iron.subscribe(iron => {
      this.iron = iron;
    });
    this.service.$ironPS.subscribe(ironPS => {
      this.ironPS = ironPS;
    });
  }
  startTimer() {
    setInterval(() => {
      this.checkDev();//Iniciar recursos visibles
      this.wood = this.wood + this.woodPS;
      this.service.$wood.next(this.wood);
      this.service.$woodPS.next(this.woodPS);
      this.stone = this.stone + this.stonePS;
      this.service.$stone.next(this.stone);
      this.service.$stonePS.next(this.stonePS);
      this.iron = this.iron + this.ironPS;
      this.service.$iron.next(this.iron);
      this.service.$ironPS.next(this.ironPS);
      this.meat = this.meat + this.meatPS;
      this.service.$meat.next(this.meat);
      this.milk = this.milk + this.milkPS;
      this.service.$milk.next(this.milk);
      this.gold = this.gold + this.goldPS;
      this.service.$gold.next(this.gold);
      this.coal = this.coal + this.coalPS;
      this.service.$coal.next(this.coal);
      this.steel = this.steel + this.steelPS;
      this.service.$steel.next(this.steel);
    }, 1000)
  }
  checkDev() {
    //TODO Iniciar recursos visibles
    if (this.stone > 0) {
      this.stoneDev = true;
    }
    if (this.iron > 0) {
      this.ironDev = true;
    }
  }
  developResource(name: string) {
    // this.name = this.name + this.namePS;
    // this.service.$name.next(this.name);
    // this.service.$namePS.next(this.namePS);
  }
}
