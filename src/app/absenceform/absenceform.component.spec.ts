import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceformComponent } from './absenceform.component';

describe('AbsenceformComponent', () => {
  let component: AbsenceformComponent;
  let fixture: ComponentFixture<AbsenceformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceformComponent]
    });
    fixture = TestBed.createComponent(AbsenceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
