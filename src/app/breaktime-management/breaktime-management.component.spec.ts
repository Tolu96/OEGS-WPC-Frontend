import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaktimeManagementComponent } from './breaktime-management.component';

describe('BreaktimeManagementComponent', () => {
  let component: BreaktimeManagementComponent;
  let fixture: ComponentFixture<BreaktimeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreaktimeManagementComponent]
    });
    fixture = TestBed.createComponent(BreaktimeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
