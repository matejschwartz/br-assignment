import cloneDeep from 'lodash-es/cloneDeep';
import { Component, OnInit } from '@angular/core';
import { faCopy, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CustomerFilterService } from '../../customer-filter.service';
import { FilterEvent } from '../../../../shared/models/filter-event.model';
import { CustomerFilter } from '../../../../shared/models/customer-filter.model';
import { CustomerFilterEvent } from '../../../../shared/models/customer-filter-event.model';

@Component({
  selector: 'app-customer-filter',
  templateUrl: './customer-filter.component.html'
})
export class CustomerFilterComponent implements OnInit {
  faCopy = faCopy
  faTrash = faTrash

  stepNumber = 0;
  eventsFromBE: FilterEvent[] = [];
  customerFilter: CustomerFilter = new CustomerFilter();

  constructor(private customerFilterService: CustomerFilterService) {}

  ngOnInit(): void {
    this.retrieveEventsFromBE();
    this.addStep();
  }

  retrieveEventsFromBE() {
    this.customerFilterService.getEvents()
      .subscribe(events => this.eventsFromBE = events)
  }

  discardFilters() {
    this.stepNumber = 0;
    this.customerFilter = new CustomerFilter([new CustomerFilterEvent(this.getStepNumber())]);
  }

  addStep() {
    this.customerFilter.events.push(new CustomerFilterEvent(this.getStepNumber()));
  }

  deleteStep(event: CustomerFilterEvent) {
    this.customerFilter.events = this.customerFilter.events
      .filter(existingEvent => existingEvent.stepNumber != event.stepNumber);
  }

  duplicateStep(event: CustomerFilterEvent) {
    const newEvent = cloneDeep(event)
    newEvent.stepNumber = this.getStepNumber();
    this.customerFilter.events.push(newEvent);
  }

  showFilter() {
    console.log(this.customerFilter);
  }

  private getStepNumber() {
    return ++this.stepNumber;
  }
}
