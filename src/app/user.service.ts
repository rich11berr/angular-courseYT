import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public isUserLogged = new BehaviorSubject<boolean>(false)

  public Stringsubject$ = new BehaviorSubject<string>('one')

  constructor() { }

  public login(): void {
    this.isUserLogged.next(true)
  }
}
