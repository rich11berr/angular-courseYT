import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';
import { LifeCycleRouting } from './life-cycle-routing.module';


@NgModule({
    declarations: [
        ParentComponent,
        ChildComponent
    ],
    imports: [
        CommonModule,
        LifeCycleRouting
    ],
    exports: []
})
export class LifeCycleModule { }
