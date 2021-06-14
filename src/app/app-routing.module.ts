import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { NormalComponent } from './examples/normal/normal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/normal' },
  { path: 'normal', component: NormalComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
