import { Component, Input, OnChanges } from '@angular/core';
import { CustomerFilterService } from '../../customer-filter.service';
import { DropdownOption } from '../../../../shared/models/dropdown-option.model';
import { Filter } from '../../../../shared/models/filter.model';
import { MatchMode } from '../../../../shared/models/match-mode.enum';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnChanges {
  @Input() eventAttributeType!: string | undefined;
  @Input() filter!: Filter;

  MatchMode = MatchMode;

  filterOptions: DropdownOption[] = [];

  ngOnChanges() {
    this.setDropdownOptionsAccordingToAttributeType();

    // select first match mode if it's not already set, or if attribute type is changed
    if (!this.filter.matchMode || !this.filterOptions.flatMap(option => option.value).includes(this.filter.matchMode)) {
      this.filter.matchMode = this.filterOptions[0].value;
    }

    // use 0 for number input
    if (this.eventAttributeType == 'number' && !this.filter.value) {
      this.filter.value = this.filter.maxValue = this.filter.minValue = 0;
    }

    // on change from number to string null zero
    if (this.eventAttributeType == 'string' && (this.filter.value == 0 || this.filter.minValue == 0 || this.filter.maxValue == 0)) {
      this.filter.value = this.filter.maxValue = this.filter.minValue = null;

    }
  }

  private setDropdownOptionsAccordingToAttributeType() {
    this.filterOptions = this.eventAttributeType == 'string'
      ? CustomerFilterService.stringFilterOptions
      : CustomerFilterService.numberFilterOptions;
  }
}
