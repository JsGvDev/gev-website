/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocalStore } from './localstore.service';

describe('Service: Localstore', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStore]
    });
  });

  it('should ...', inject([LocalStore], (service: LocalStore) => {
    expect(service).toBeTruthy();
  }));
});
