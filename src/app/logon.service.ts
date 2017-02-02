import { Injectable } from '@angular/core';

@Injectable()
export class LogonService {
  isLogin: boolean;

  constructor() { 
    this.isLogin = false;
  }

  setLogon(state : boolean){
    this.isLogin = state;
    console.log('isLogin state: ' + this.isLogin);
  }

  getLoginState(){
    console.log('get isLogin state: ' + this.isLogin);
    return this.isLogin;
  }
}
