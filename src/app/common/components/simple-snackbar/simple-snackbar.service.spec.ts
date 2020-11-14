import { TestBed } from '@angular/core/testing';

import { SimpleSnackbarService } from './simple-snackbar.service';

describe('SimpleSnackbarService', () => {
  let service: SimpleSnackbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleSnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
