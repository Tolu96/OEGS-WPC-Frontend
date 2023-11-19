import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeManagementComponent } from './time-management.component';

describe('TimeManagementComponent', () => {
  let component: TimeManagementComponent;
  let fixture: ComponentFixture<TimeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeManagementComponent]
    });
    fixture = TestBed.createComponent(TimeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
