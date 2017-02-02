/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogonService } from './logon.service';

describe('LogonserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogonService]
    });
  });

  it('should ...', inject([LogonService], (service: LogonService) => {
    expect(service).toBeTruthy();
  }));
});
