import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'customer-filter'
  },
  {
    path: 'customer-filter',
    loadChildren: () => import('./modules/customer-filter/customer-filter.module').then(m => m.CustomerFilterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
