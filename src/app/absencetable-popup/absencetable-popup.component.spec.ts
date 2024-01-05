import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencetablePopupComponent } from './absencetable-popup.component';

describe('AbsencetablePopupComponent', () => {
  let component: AbsencetablePopupComponent;
  let fixture: ComponentFixture<AbsencetablePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsencetablePopupComponent]
    });
    fixture = TestBed.createComponent(AbsencetablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
