import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFilterEventComponent } from './customer-filter-event.component';

describe('CustomerFilterStepComponent', () => {
  let component: CustomerFilterEventComponent;
  let fixture: ComponentFixture<CustomerFilterEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFilterEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFilterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
