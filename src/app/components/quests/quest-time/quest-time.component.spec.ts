import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTimeComponent } from './quest-time.component';

describe('QuestTimeComponent', () => {
  let component: QuestTimeComponent;
  let fixture: ComponentFixture<QuestTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
