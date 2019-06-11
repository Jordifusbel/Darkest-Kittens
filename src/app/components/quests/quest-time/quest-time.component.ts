import { Component, OnInit } from '@angular/core';
import { QuestsService } from '../quests.service';

@Component({
  selector: 'app-quest-time',
  templateUrl: './quest-time.component.html',
  styleUrls: ['./quest-time.component.css']
})
export class QuestTimeComponent implements OnInit {
  timePending: number = 0;
  
  constructor(private service: QuestsService) { }

  ngOnInit() {
    this.service.$time.subscribe(time => {
      this.timePending = time;
    });
  }

}
