import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalComponent } from './examples/normal/normal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/normal' },
  { path: 'normal', component: NormalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
