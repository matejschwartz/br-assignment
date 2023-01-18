import { CustomerFilterEventAttribute } from "./customer-filter-event-attribute.model";
import { Constants } from "./constants.enum";

export class CustomerFilterEvent {
  stepNumber: number;
  stepName: string;
  eventType: string | undefined;
  eventAttributes: CustomerFilterEventAttribute[];

  constructor(
    stepNumber: number,
    stepName: string = Constants.UNNAMED_STEP,
    eventType: string | undefined = undefined,
    eventAttributes: CustomerFilterEventAttribute[] = []
  ) {
    this.stepNumber = stepNumber;
    this.stepName = stepName;
    this.eventType = eventType;
    this.eventAttributes = eventAttributes;
  }
}
