import { TestBed } from '@angular/core/testing';

import { DeuxiemeGuard } from './deuxieme.guard';

describe('DeuxiemeGuard', () => {
  let guard: DeuxiemeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeuxiemeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
