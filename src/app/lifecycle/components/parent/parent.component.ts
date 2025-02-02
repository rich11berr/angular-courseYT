import { Component } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.scss',
    standalone: false
})
export class ParentComponent {

  public obj: string = 'title'

  public show = false;

  public handleEvent(value: string) {
    this.obj = value;
  }

}
