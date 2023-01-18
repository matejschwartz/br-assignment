import { Component, Input, OnInit } from '@angular/core';
import { CustomerFilterService } from '../../customer-filter.service';
import { DropdownOption } from '../../../../shared/models/dropdown-option.model';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FilterEvent } from '../../../../shared/models/filter-event.model';
import { CustomerFilterEvent } from '../../../../shared/models/customer-filter-event.model';
import { Constants } from '../../../../shared/models/constants.enum';
import { CustomerFilterEventAttribute } from '../../../../shared/models/customer-filter-event-attribute.model';

@Component({
  selector: 'app-customer-filter-step',
  templateUrl: './customer-filter-event.component.html'
})
export class CustomerFilterEventComponent implements OnInit {
  faPencil = faPencil
  faTrash = faTrash

  @Input() customerFilterEvent!: CustomerFilterEvent;
  @Input() eventsFromBE!: FilterEvent[];

  event: FilterEvent | undefined = undefined;
  eventsDropdown: DropdownOption[] = [];

  constructor(private customerFilterService: CustomerFilterService) {
  }

  // when event is duplicated, make sure that event attributes will be populated in child component
  ngOnInit() {
    this.setEventForChildComponent();
    this.eventsDropdown = this.customerFilterService.getEventsForDropdown(this.eventsFromBE);
  }

  eventChanged(value: any) {
    // if step has default name, change it to eventType
    if (this.customerFilterEvent.stepName == Constants.UNNAMED_STEP) {
      this.customerFilterEvent.stepName = value;
    }

    // update value
    this.customerFilterEvent.eventType = value;
    this.customerFilterEvent.eventAttributes = [];

    this.setEventForChildComponent();
  }

  setEventForChildComponent() {
    this.event = this.eventsFromBE?.find(eventItem => eventItem.type == this.customerFilterEvent.eventType);
  }

  addAttribute() {
    this.customerFilterEvent.eventAttributes.push(new CustomerFilterEventAttribute());
  }

  removeAttribute(attribute: CustomerFilterEventAttribute) {
    this.customerFilterEvent.eventAttributes = this.customerFilterEvent.eventAttributes.filter(attr => attr != attribute);
  }
}
