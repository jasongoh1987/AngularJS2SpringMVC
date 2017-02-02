import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { LogonService } from '../logon.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})


export class LoginComponent implements OnInit {

  constructor(private http: Http, private router : Router, private logonService : LogonService ) { }

  ngOnInit() {
  }

  private processResult(res : any){
    console.log(res.code);
  
    if(res.result && res.result.length > 0){
      for(let r of res.result){
        console.log(r.email);
        console.log(r.phone);
        console.log(r.username);
      }
        this.logonService.setLogon(true);
        this.router.navigateByUrl("/main");
    }
    else{
      this.logonService.setLogon(false);
    }
  }

  onSubmit(value: any) {
    
	var search = {};
	search["username"] = value.username;
	
    let headers = new Headers({ 'content-type': 'application/json'} );
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify({ username : value.username});
    var result;
    this.http.post('search/api/getSearchResult', body, options)
              .subscribe((res:Response) => this.processResult(res.json()));
    //.subscribe(
            //    () => {alert("Success")}, //For Success Response
            //    err => {console.error(err)} //For Error Response
            //);

  }
  
}
