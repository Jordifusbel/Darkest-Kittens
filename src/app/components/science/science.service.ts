import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {
  $time: Subject<number> = new Subject<number>();
  constructor() { }
}
