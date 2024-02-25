import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorsPageComponent } from './components/decorators-page/decorators-page.component';


const routes: Routes = [
    {
        path: '',
        component: DecoratorsPageComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DecoratorsRouting { }
