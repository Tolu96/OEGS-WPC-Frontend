import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreaktimeformComponent } from './breaktimeform.component';

describe('BreaktimeformComponent', () => {
  let component: BreaktimeformComponent;
  let fixture: ComponentFixture<BreaktimeformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreaktimeformComponent]
    });
    fixture = TestBed.createComponent(BreaktimeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
