import { Filter } from "./filter.model";

export class CustomerFilterEventAttribute {
  eventAttribute: string | undefined;
  eventAttributeType: string | undefined;
  filter: Filter;

  constructor(
    eventAttribute: string | undefined = undefined,
    eventAttributeType: string | undefined = undefined,
    filter: Filter = new Filter()
  ) {
    this.eventAttribute = eventAttribute;
    this.eventAttributeType = eventAttributeType;
    this.filter = filter;
  }
}
