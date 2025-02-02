import { Component, Output, computed, input, model, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './app-child.component.html',
  styleUrl: './app-child.component.scss'
})
export class AppChildComponent {

  value = model(0);

  public increment(): void {
    this.value.update(oldValue => oldValue + 1)
  }

}

