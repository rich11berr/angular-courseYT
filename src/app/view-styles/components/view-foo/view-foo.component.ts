import { Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 { color: green }'
  ],
})
export class ViewFooComponent {

  constructor(private _userService: UserService) { }

  public login(): void {
    this._userService.login();
  }

}
