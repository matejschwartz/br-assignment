import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { FilterEvent } from "../../shared/models/filter-event.model";
import { map, Observable } from 'rxjs';
import { DropdownOption } from '../../shared/models/dropdown-option.model';
import { MatchMode } from '../../shared/models/match-mode.enum';
import { FilterEventAttribute } from "../../shared/models/filter-event-attribute.model";

@Injectable({
  providedIn: 'root'
})
export class CustomerFilterService {

  static stringFilterOptions: DropdownOption[] = [
    new DropdownOption(MatchMode.EQUALS, MatchMode.EQUALS),
    new DropdownOption(MatchMode.DOES_NOT_EQUAL, MatchMode.DOES_NOT_EQUAL),
    new DropdownOption(MatchMode.CONTAINS, MatchMode.CONTAINS),
    new DropdownOption(MatchMode.DOES_NOT_CONTAIN, MatchMode.DOES_NOT_CONTAIN),
  ];

  static numberFilterOptions: DropdownOption[] = [
    new DropdownOption(MatchMode.EQUAL_TO, MatchMode.EQUAL_TO),
    new DropdownOption(MatchMode.IN_BETWEEN, MatchMode.IN_BETWEEN),
    new DropdownOption(MatchMode.LESS_THAN, MatchMode.LESS_THAN),
    new DropdownOption(MatchMode.GREATER_THAN, MatchMode.GREATER_THAN),
  ];

  constructor(private http: HttpClient) {}

  //TODO cache response
  getEvents(): Observable<FilterEvent[]> {
    return this.http.get<{ events: FilterEvent[] }>(environment.eventsUrl)
      .pipe(
        map(response => response.events)
      );
  }

  getEventsForDropdown(events: FilterEvent[]): DropdownOption[] {
    return events.map((event: FilterEvent) => new DropdownOption(event.type, event.type));
  }

  getEventsAttributesForDropdown(event: FilterEvent | undefined): DropdownOption[] {
    if (!event) {
      return [];
    }

    return event.properties.map((property: FilterEventAttribute) => new DropdownOption(property.property, property.property));
  }
}
