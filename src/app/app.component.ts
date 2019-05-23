import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Darkest';
  ticks = 0;
  timeLeft: number = 60;
  //Resources
  iron: number = 0;
  wood: number = 0;
  gold: number = 0;
  //ResourcesPerSecond
  ironPS: number = 1;
  woodPS: number = 2;
  goldPS: number = 0.25;
  interval: any;

  //Science
  ironAxeDeveloped: boolean = false;
  ngOnInit() {
    this.startTimer();
  }
  
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.wood = this.wood + this.woodPS;
        this.iron = this. iron + this.ironPS;
        this.gold = this.gold + this.ironPS;
      } else {
        this.timeLeft = 60;
      }
    }, 1000)

  }
  ironAxe(){
    if(this.iron >= 10 && this.ironAxeDeveloped == false){
      this.iron = this.iron - 10;
      this.ironPS = this.woodPS + 1;
      this.ironAxeDeveloped = true;
    }
  }
}
