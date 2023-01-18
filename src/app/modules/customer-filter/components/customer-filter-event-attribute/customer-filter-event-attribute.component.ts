import { Component, Input, OnInit } from '@angular/core';
import { FilterEvent } from '../../../../shared/models/filter-event.model';
import { DropdownOption } from '../../../../shared/models/dropdown-option.model';
import { CustomerFilterService } from '../../customer-filter.service';
import { CustomerFilterEventAttribute } from '../../../../shared/models/customer-filter-event-attribute.model';

@Component({
  selector: 'app-customer-filter-event-attribute',
  templateUrl: './customer-filter-event-attribute.component.html'
})
export class CustomerFilterEventAttributeComponent implements OnInit {
  @Input() customerFilterEventAttribute!: CustomerFilterEventAttribute;
  @Input() event: FilterEvent | undefined = undefined;

  eventAttributesDropdown: DropdownOption[] = [];

  constructor(private customerFilterService: CustomerFilterService) {}

  // prepare data for dropdown
  ngOnInit() {
    this.eventAttributesDropdown = this.customerFilterService.getEventsAttributesForDropdown(this.event);
  }

  attributeChanged(value: any) {
    // find event property type, so we can use it in filter (child component)
    this.customerFilterEventAttribute.eventAttributeType = this.event?.properties.find(item => item.property == value)?.type;
    this.customerFilterEventAttribute.eventAttribute = value;
  }
}
