import { BuildingsService } from './../buildings/buildings.service';
import { Component, OnInit } from '@angular/core';
import { Kitten } from './kitten.interface';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css']
})
export class KittensComponent implements OnInit {
  //kittens
  nOfKittens: number = 0;
  kittens: Kitten[] = [];
  //jobs
  jobs: string[] = ["pawladin", "knight"];//, "stalker", "feral", "mage", "cleric"
  //Availability
  pawDev: boolean = false;
  kniDev: boolean = false;
  // staDev: boolean = false;
  // ferDev: boolean = false;
  // magDev: boolean = false;
  // cleDev: boolean = false;
  constructor(private service: BuildingsService) { }

  ngOnInit() {
    if (localStorage.getItem("kittensData") != undefined) {
      let values = JSON.parse(localStorage.getItem("kittensData"));
      this.kittens = values.kittens;
      this.pawDev = values.pawDev;
      this.kniDev = values.kniDev;
    };// this.staDev = values.staDev;
    // this.ferDev = values.ferDev;
    // this.magDev = values.magDev;
    // this.cleDev = values.cleDev;
    this.service.$gLvl.subscribe(gLvl => {
      this.kniDev = true;
      this.pawDev = true;
      this.nOfKittens = gLvl * 2;
    })
    while (this.nOfKittens > this.kittens.length) {
      this.kittens.push({ profession: "unemployed" });
    }
  }
  ngOnDestroy(): void {
    let kittensData = {
      "kittens": this.kittens,
      "pawDev": this.pawDev,
      "kniDev": this.kniDev,
    };// "staDev": this.staDev,
    // "ferDev": this.ferDev,
    // "magDev": this.magDev,
    // "cleDev": this.cleDev
    localStorage.setItem("kittensData", JSON.stringify(kittensData));
  }
  getProf(rol: string) {
    if (this.kittens.length > 0) {
      let jobFound = this.kittens.find(gato => gato.profession == "unemployed")
      if (jobFound) {
        jobFound.profession = rol;
      }
    }
  }
  loseProf(rol: string) {
    if (this.kittens.length > 0) {
      let jobLost = this.kittens.find(gato => gato.profession == rol)
      if (jobLost) {
        jobLost.profession = "unemployed";
      }
    }
  }
}
