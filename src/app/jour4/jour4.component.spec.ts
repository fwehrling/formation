import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jour4Component } from './jour4.component';

describe('Jour4Component', () => {
  let component: Jour4Component;
  let fixture: ComponentFixture<Jour4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Jour4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Jour4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
