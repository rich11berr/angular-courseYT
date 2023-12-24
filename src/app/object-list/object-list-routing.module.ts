import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyObjectItemComponent } from './componets/item/object-item.component';
import { MyObjectListComponent } from './componets/list/object-list.component';

const routes: Routes = [
    {
        path: '',
        component: MyObjectListComponent,
    },
    {
        path: ':id', component: MyObjectItemComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyObjectListRouting { }
