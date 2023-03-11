import { LoginDataComponent } from './login-data/login-data.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'home', 
    component : HomeComponent
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path:'login-data',
    component:LoginDataComponent
  },
  {
    path :'', 
    redirectTo :'home' ,
    pathMatch:'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
