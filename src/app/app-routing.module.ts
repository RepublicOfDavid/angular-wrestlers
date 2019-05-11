import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrestlersComponent } from './components/wrestlers/wrestlers.component';
import { WrestlerDetailComponent } from './components/wrestler-detail/wrestler-detail.component';

const routes: Routes = [
  { path: '', component: WrestlersComponent },
  { path: ':id', component: WrestlerDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
