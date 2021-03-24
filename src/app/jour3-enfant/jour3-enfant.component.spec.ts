import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jour3EnfantComponent } from './jour3-enfant.component';

describe('Jour3EnfantComponent', () => {
  let component: Jour3EnfantComponent;
  let fixture: ComponentFixture<Jour3EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jour3EnfantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jour3EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
