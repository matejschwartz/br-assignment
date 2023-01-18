import { CustomerFilterEvent } from "./customer-filter-event.model";

export class CustomerFilter {
  events: CustomerFilterEvent[];

  constructor(events: CustomerFilterEvent[] = []) {
    this.events = events;
  }
}
