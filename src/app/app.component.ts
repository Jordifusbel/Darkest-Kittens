import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DarkestDungeon';
  //Resources
  iron: number = 0;
  wood: number = 0;
  gold: number = 0;
  //ResourcesPerSecond
  ironPS: number = 3;
  woodPS: number = 5;
  goldPS: number = 1;
  //names
  ironAxeText: string = "Get iron axes (10 iron)";
  ironHoeText: string = "";

  //

  //Science
  ironAxeDeveloped: boolean = false;
  ngOnInit() {
    this.startTimer();
  }
  
  startTimer() {
    let interval: any;
    interval = setInterval(() => {
        this.wood = this.wood + this.woodPS;
        this.iron = this. iron + this.ironPS;
        this.gold = this.gold + this.goldPS;
    }, 1000)

  }
  ironAxe(){
    if(this.iron >= 10 && this.ironAxeDeveloped == false){
      this.iron = this.iron - 10;
      this.woodPS = this.woodPS + 1;
      this.ironAxeDeveloped = true;
      this.ironAxeText = 'Iron Axes developed';
    }
  }
}
