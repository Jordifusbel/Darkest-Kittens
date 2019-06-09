import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.css']
})
export class BuildingsComponent implements OnInit {
  LCcost: number = 0;
  LClvl: number = 0;
  constructor() { }

  ngOnInit() {
  }

  buildLC(){

  }
}
