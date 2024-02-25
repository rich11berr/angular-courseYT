import { Component } from '@angular/core';

@Component({
  selector: 'app-decorators-page',
  templateUrl: './decorators-page.component.html',
  styleUrl: './decorators-page.component.scss'
})
export class DecoratorsPageComponent {

  public arr = [1, 2, 3, 4, 5];

  public isShow = true;
}
