import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterEventAttributeComponent } from './customer-filter-event-attribute.component';

describe('CustomerFilterEventAttributeComponent', () => {
  let component: CustomerFilterEventAttributeComponent;
  let fixture: ComponentFixture<CustomerFilterEventAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterEventAttributeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterEventAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
