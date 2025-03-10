import { AfterContentInit, AfterViewInit, Component, DoCheck, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, input } from '@angular/core';

@Component({
    selector: 'app-child',
    templateUrl: './child.component.html',
    styleUrl: './child.component.scss',
    standalone: false
})
export class ChildComponent implements OnInit, DoCheck, AfterContentInit, AfterViewInit, OnDestroy, OnChanges {

  readonly title = input.required<string>();

  @Output() eventChange = new EventEmitter<string>()

  constructor() {
    console.log('%cConstructor', 'color: red');
  }

  public tempTitle!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('Changes')
  }

  ngOnInit(): void {
    console.log('%cOnInit', 'color: blue');
    this.tempTitle = this.title();
  }

  ngDoCheck(): void {
    console.log('%cDoCheck', 'color: orange');
  }

  ngAfterContentInit(): void {
    console.log('%cContent', 'color: yellow')
  }

  ngAfterViewInit(): void {
    console.log('%cViewInit', 'color: violet')
  }

  ngOnDestroy(): void {
    console.log('%cOnDestroy', 'color: green');
  }

  public clickHandler(): void {
    this.tempTitle = 'I am mutated';
    this.eventChange.emit(this.tempTitle);
  }

}
