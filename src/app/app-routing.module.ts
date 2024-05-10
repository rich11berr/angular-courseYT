import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { MyEmptyPage } from './components/empty-route/empty-route.component';
import { isLoggedGuardFn, isLoggedGuardService } from './is-logged.guard';

const routes: Routes = [
  {
    path: 'calculator',
    component: MyCalculatorComponent,
    canDeactivate: [
      (component: MyCalculatorComponent) => !component.canLeave
    ]
  },
  {
    path: '', redirectTo: 'calculator', pathMatch: 'full'
  },
  {
    path: 'object-list',
    loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
  },
  {
    path: 'directives',
    loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
  },
  {
    path: 'life-cycle',
    loadChildren: () => import('./lifecycle/life-cycle.module').then((m) => m.LifeCycleModule)
  },
  {
    path: 'requests',
    loadChildren: () => import('./requests/request-module.module').then((m) => m.RequestModule),
    canActivate: [isLoggedGuardFn],
  },
  {
    path: 'pipes',
    loadChildren: () => import('./pipes/pipes.module').then((m) => m.PipeModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then((m) => m.FormsUIModule)
  },
  {
    path: 'decorators',
    loadChildren: () => import('./decorators/decorators.module').then((m) => m.DecoratorsModule)
  },
  {
    path: 'view-styles',
    loadChildren: () => import('./view-styles/view-styles.module').then((m) => m.ViewStylesModule),
  },
  {
    path: '**',
    component: MyEmptyPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
