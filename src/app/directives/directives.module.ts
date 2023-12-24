import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MyChangeColorDirectiveDirective } from './directive/my-change-color-directive.directive';
import { MyIfDirectiveDirective } from './directive/my-if-directive.directive';
import { DirectivesRouting } from './directives-routings.module';
import { DirectivesPageComponent } from './directives.component';



@NgModule({
  declarations: [DirectivesPageComponent, MyChangeColorDirectiveDirective, MyIfDirectiveDirective],
  imports: [
    CommonModule,
    DirectivesRouting
  ],
  exports: []
})
export class DirectivesModule { }
