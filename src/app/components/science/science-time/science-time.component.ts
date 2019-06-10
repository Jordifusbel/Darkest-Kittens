import { ScienceService } from './../science.service';
import { ScienceComponent } from './../science.component';
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
    this.service.$mDevTime.subscribe(time => {
      this.timePending = time;
    });
  }

}
