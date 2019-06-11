import { Injectable } from '@angular/core';
import { Kitten } from './kitten.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KittensService {
  $kittens: BehaviorSubject<Kitten[]> = new BehaviorSubject<Kitten[]>([{"profession": "unemployed"}]);
  constructor() { }
}
