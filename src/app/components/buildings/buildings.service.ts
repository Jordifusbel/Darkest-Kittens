import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingsService {
  $gLvl: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }
}
