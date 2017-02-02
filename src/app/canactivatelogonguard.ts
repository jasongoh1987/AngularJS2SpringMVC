import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LogonService } from './logon.service';

@Injectable()
export class CanActivateLogonGuard implements CanActivate {

  constructor(private authService: LogonService) {}

  canActivate() {
    return this.authService.getLoginState();
  }
}