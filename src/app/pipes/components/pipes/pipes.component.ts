import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
  // DatePipe
  // UpperCase
  // LowerCase
  // CurrencyPipe
  // DecimalPipe
  // PercentPipe

  public name: string = 'dazhe i ne strayus';
  public surname: string = 'DEVEloper';

  public date = new Date().toDateString();
}
