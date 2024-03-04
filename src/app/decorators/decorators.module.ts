import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DecoratorsPageComponent } from './components/decorators-page/decorators-page.component';
import { DecoratorsRouting } from './decorators-routing.module';
import { ChildDecoratorComponent } from './components/child-decorator/child-decorator.component';



@NgModule({
    declarations: [
        DecoratorsPageComponent,
        ChildDecoratorComponent
    ],
    imports: [
        CommonModule,
        DecoratorsRouting,
    ]
})
export class DecoratorsModule { }
