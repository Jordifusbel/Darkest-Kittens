import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienceTimeComponent } from './science-time.component';

describe('ScienceTimeComponent', () => {
  let component: ScienceTimeComponent;
  let fixture: ComponentFixture<ScienceTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScienceTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScienceTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
