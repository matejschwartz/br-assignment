import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerFilterRoutingModule } from './customer-filter-routing.module';
import { CustomerFilterComponent } from './pages/customer-filter/customer-filter.component';
import { CustomerFilterEventComponent } from "./components/customer-filter-event/customer-filter-event.component";
import { CustomerFilterEventAttributeComponent } from './components/customer-filter-event-attribute/customer-filter-event-attribute.component';
import { SharedModule } from "../../shared/shared.module";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { FilterComponent } from './components/filter/filter.component';
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    CustomerFilterComponent,
    CustomerFilterEventComponent,
    CustomerFilterEventAttributeComponent,
    FilterComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        FontAwesomeModule,
        CustomerFilterRoutingModule,
        FormsModule,
    ]
})
export class CustomerFilterModule { }
