import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login/login-routing.module';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  {
    path: 'login', loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: 'project', loadChildren: "./project/project.module#ProjectModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
