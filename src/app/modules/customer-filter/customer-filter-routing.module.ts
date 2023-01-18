import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFilterComponent } from "./pages/customer-filter/customer-filter.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerFilterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerFilterRoutingModule {}
