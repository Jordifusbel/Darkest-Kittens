import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
//Resources
  $wood: Subject<number> = new Subject<number>();
  $stone: Subject<number> = new Subject<number>();
  $iron: Subject<number> = new Subject<number>();
  $meat: Subject<number> = new Subject<number>();
  $milk: Subject<number> = new Subject<number>();
  $gold: Subject<number> = new Subject<number>();
  $coal: Subject<number> = new Subject<number>();
  $steel: Subject<number> = new Subject<number>();
//ResourcesPS
  $woodPS: Subject<number> = new Subject<number>();
  $stonePS: Subject<number> = new Subject<number>();
  $ironPS: Subject<number> = new Subject<number>();
  $meatPS: Subject<number> = new Subject<number>();
  $milkPS: Subject<number> = new Subject<number>();
  $goldPS: Subject<number> = new Subject<number>();
  $coalPS: Subject<number> = new Subject<number>();
  $steelPS: Subject<number> = new Subject<number>();

  constructor() { }
}
