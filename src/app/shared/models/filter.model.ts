import { MatchMode } from "./match-mode.enum";

export class Filter {
  matchMode: MatchMode | undefined;
  minValue: number | null;
  maxValue: number | null;
  value: string | number | null;

  constructor(
    matchMode: MatchMode | undefined = undefined,
    minValue: number | null = null,
    maxValue: number | null = null,
    value: string | number | null = null
  ) {
    this.matchMode = matchMode;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.value = value;
  }
}
