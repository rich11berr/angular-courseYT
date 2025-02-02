import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public counter = signal<number>(0);

  public doubleCounter = computed(() => {
    return this.counter() * 2
  })

  constructor() {
    effect(() => {
      console.log(`signal tgriggered, ${this.counter()}`)
    })
  }

  public plusCounter(): void {
    this.counter.update(value => value + 1);
  }
}
