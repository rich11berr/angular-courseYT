import { Component } from '@angular/core';

@Component({
    selector: 'app-directives',
    templateUrl: './directives.component.html',
    styleUrl: './directives.component.scss',
    standalone: false
})
export class DirectivesPageComponent {

  // ngFor


  // ngIf

  public isShow = true;

  //ngSwitch

  // ngStyle

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  }

  // ngClass

}
