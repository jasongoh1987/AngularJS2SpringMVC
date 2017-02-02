import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CanActivateLogonGuard } from './canactivatelogonguard';

const routes: Routes = [
  {
	  path: '', 
    redirectTo: 'home', 
	  pathMatch: 'full' 
  },
  {
    path: 'home',
	  component: LoginComponent,
    children: [
      {
        path: '', 
        redirectTo: 'main',
        canActivate: [CanActivateLogonGuard],
        pathMatch: 'full'
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanActivateLogonGuard]
})
export class AppRoutingModule { }
