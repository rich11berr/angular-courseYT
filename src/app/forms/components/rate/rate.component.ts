import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

export interface RateOptions {
  rates: number,
  text?: string;
}

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: RateComponent
    }
  ]
})
export class RateComponent implements ControlValueAccessor, OnInit {

  @Input() options!: RateOptions;

  public currentRate!: number;

  public ratesArr: number[] = [];

  public disabled = false;

  public touched = false;

  onChange = (currentRate: number) => { };

  onTouched = () => { }

  ngOnInit(): void {
    this.fillRatesArr();
  }

  public onRate(index: number) {
    this.markAsTouched();
    if (!this.disabled) {
      this.currentRate = index;
      this.onChange(this.currentRate)
    }
  }


  // ControlValueAccesor methods start
  public writeValue(rate: number): void {
    this.currentRate = rate;
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
  // ControlValueAccesor methods end


  private fillRatesArr(): void {
    let cond = true;
    let count = 1;
    while (cond) {
      this.ratesArr.push(count);
      if (count === this.options.rates) {
        cond = false;
      } else {
        count++;
      }
    }
  }



}
