import { ScienceService } from './../science.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-science-time',
  templateUrl: './science-time.component.html',
  styleUrls: ['./science-time.component.css']
})
export class ScienceTimeComponent implements OnInit {
  timePending: number = 0;
  constructor(private service: ScienceService) { }

  ngOnInit() {
    this.service.$time.subscribe(time => {
      this.timePending = time;
    });
  }

}
