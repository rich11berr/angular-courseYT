import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false
})
export class AppComponent {

  parentValue = signal(0)

  constructor() {
    effect(() => {
      console.log(`parentValue changed ${this.parentValue()}`)
    })
  }
}
