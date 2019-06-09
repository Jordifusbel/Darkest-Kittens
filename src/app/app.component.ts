import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Darkest Kittens';
  
  //names
  ironAxeText: string = "Get iron axes (10 iron)";
  ironHoeText: string = "";

  //Science
  ironAxeDeveloped: boolean = false;
  ngOnInit() {
  }
  
  // ironAxe(){
  //   if(this.iron >= 10 && this.ironAxeDeveloped == false){
  //     this.iron = this.iron - 10;
  //     this.woodPS = this.woodPS + 1;
  //     this.ironAxeDeveloped = true;
  //     this.ironAxeText = 'Iron Axes developed';
  //   }
  // }
}
