import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePopupComponent } from './time-popup.component';

describe('TimePopupComponent', () => {
  let component: TimePopupComponent;
  let fixture: ComponentFixture<TimePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimePopupComponent]
    });
    fixture = TestBed.createComponent(TimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
