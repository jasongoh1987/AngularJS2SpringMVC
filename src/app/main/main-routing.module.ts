import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { CanActivateLogonGuard } from '../canactivatelogonguard';

const routes: Routes = [
  { 
	  path: '', 
    redirectTo: 'main', 
    canActivate: [CanActivateLogonGuard],
	  pathMatch: 'full' 
  },
  {
     path: 'main', 
     canActivate: [CanActivateLogonGuard],
     component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateLogonGuard]
})
export class MainRoutingModule { }
