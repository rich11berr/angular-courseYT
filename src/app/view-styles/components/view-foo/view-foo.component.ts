import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../user.service';

export interface TodoItemI {
  text: string;
}

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 { color: green }'
  ],
})
export class ViewFooComponent {

  public todoArr: TodoItemI[] = [
    {
      text: 'Foo1'
    },
    {
      text: 'Foo2',
    },
    {
      text: 'Foo3',
    }
  ]

  constructor(private _userService: UserService, private _cdr: ChangeDetectorRef) { }

  public login(): void {
    this._userService.login();
  }

  public changeText(): void {
    this.todoArr[0] = { ...this.todoArr[0], text: 'Foo changed' };
  }

  public changeStream(): void {
    this._userService.Stringsubject$.next('two');
  }

}
