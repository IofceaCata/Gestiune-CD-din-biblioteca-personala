import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdsComponent } from './cds/cds.component';

const routes: Routes = [
  { path:'', component: CdsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
