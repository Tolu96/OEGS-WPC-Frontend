import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetablePopupComponent } from './timetable-popup.component';

describe('TimetablePopupComponent', () => {
  let component: TimetablePopupComponent;
  let fixture: ComponentFixture<TimetablePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetablePopupComponent]
    });
    fixture = TestBed.createComponent(TimetablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
