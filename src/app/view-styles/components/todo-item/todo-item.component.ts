import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../../../user.service';
import { TodoItemI } from '../view-foo/view-foo.component';

@Component({
    selector: 'app-todo-item',
    templateUrl: './todo-item.component.html',
    styleUrl: './todo-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TodoItemComponent {

  readonly todoItem = input.required<TodoItemI>({ alias: "todo" });

  public subject$: Observable<string>;

  constructor(private _userService: UserService) {
    this.subject$ = this._userService.Stringsubject$;
  }

  public returnBool(): boolean {
    console.log('componentRendered');
    return true;
  }

  public changeInsideText(): void {
    this.todoItem().text = 'changed from inside'
  }

}
