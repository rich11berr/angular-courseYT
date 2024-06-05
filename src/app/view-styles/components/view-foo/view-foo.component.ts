import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';
import { UserService } from '../../../user.service';

export interface TodoItemI {
  text: string;
}

const fadeInOut = trigger('fadeInOut', [
  state(
    'open',
    style({ opacity: 1 })
  ),
  state(
    'close',
    style({ opacity: 0 })
  ),
  transition('open => close', [animate('1s ease-out')]),
  transition('close => open', [animate('1s ease-in')])
])

@Component({
  selector: 'app-view-foo',
  templateUrl: './view-foo.component.html',
  styleUrl: './view-foo.component.scss',
  styles: [
    'h1 { color: green }'
  ],
  animations: [fadeInOut]
})
export class ViewFooComponent {

  public isShow = false;

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

  public onAnimationStart(event: any) {
    console.log('start', event);
  }

  public onAnimationDone(event: any) {
    console.log('done', event);
  }

}
