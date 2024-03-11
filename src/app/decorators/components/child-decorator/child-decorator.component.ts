import { AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-child-decorator',
  templateUrl: './child-decorator.component.html',
  styleUrl: './child-decorator.component.scss'
})
export class ChildDecoratorComponent implements AfterContentInit {

  @ContentChildren('paragraph') paragraph!: QueryList<ElementRef<HTMLParagraphElement>>

  public ngAfterContentInit(): void {
    this.paragraph && console.log(this.paragraph);
  }

}
