import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ViewBarComponent } from './components/view-bar/view-bar.component';
import { ViewFooComponent } from './components/view-foo/view-foo.component';
import { ViewStylesRouting } from './view-styles-routing.module';



@NgModule({
  declarations: [
    ViewFooComponent,
    ViewBarComponent,
  ],
  imports: [
    CommonModule,
    ViewStylesRouting
  ]
})
export class ViewStylesModule { }
