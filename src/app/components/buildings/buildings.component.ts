import { ResourcesComponent } from './../resources/resources.component';
import { Component, OnInit, Input } from '@angular/core';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  // @Input() wood: number;
  // @Input() iron: number;
  // @Input() gold: number;
  //Lumber Camp
  LCWcost: number = 0;
  LClvl: number = 0;
  constructor() { }

  ngOnInit() {
  }

  buildLC(){
    if(this.LCWcost < 5){
      this.LClvl = this.LClvl + 1;
    }
  }
}
