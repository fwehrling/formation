import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jour3Component } from './jour3.component';

describe('Jour3Component', () => {
  let component: Jour3Component;
  let fixture: ComponentFixture<Jour3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jour3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jour3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
