import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsencetableComponent } from './absencetable.component';

describe('AbsencetableComponent', () => {
  let component: AbsencetableComponent;
  let fixture: ComponentFixture<AbsencetableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsencetableComponent]
    });
    fixture = TestBed.createComponent(AbsencetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
