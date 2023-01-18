import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DropdownOption } from '../../models/dropdown-option.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent {
  @Input() options: DropdownOption[] = [];
  @Input() placeholder: string | null = null;
  @Input() value: any | undefined = undefined;
  @Input() id: string = 'id';

  @Output() select: EventEmitter<DropdownOption> = new EventEmitter<DropdownOption>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  onSelect(event: DropdownOption | undefined) {
    this.select.emit(event);
    this.valueChange.emit(event);
  }
}
