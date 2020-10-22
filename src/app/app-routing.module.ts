import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowServicesComponent } from './_views/show-services/show-services.component';

const routes: Routes = [
  {path: 'all', component: ShowServicesComponent},
  {path: '', redirectTo: 'all', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
