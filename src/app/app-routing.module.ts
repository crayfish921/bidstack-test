import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'list',
    loadChildren: () => import('./components/company-list/company-list.module').then(m => m.CompanyListModule)
  },
  {
    path: 'company/:name',
    loadChildren: () => import('./components/company-details/company-details.module').then(m => m.CompanyDetailsModule)
  },
  { 
    path: '',
    redirectTo: '/list', 
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
