import { FilterEventAttribute } from "./filter-event-attribute.model";

export class FilterEvent {
  type: string;
  properties: FilterEventAttribute[];

  constructor(type: string, properties: FilterEventAttribute[]) {
    this.type = type;
    this.properties = properties;
  }
}
