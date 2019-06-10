import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScienceService {
  $mDevTime: Subject<number> = new Subject<number>();
  constructor() { }
}
