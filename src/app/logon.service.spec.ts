/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogonserviceService } from './logon.service';

describe('LogonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogonserviceService]
    });
  });

  it('should ...', inject([LogonserviceService], (service: LogonserviceService) => {
    expect(service).toBeTruthy();
  }));
});
