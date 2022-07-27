import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { ProjectionComponent } from './projection/projection.component';
import { SecondoComponentComponent } from './secondo-component/secondo-component.component';
import { ServicePageComponent } from './service-page/service-page.component';

const routes: Routes = [
  {
    path: 'input',
    component: InputPageComponent
  },
  {
    path: 'output',
    component: OutputPageComponent
  },
  {
    path: 'projection',
    component: ProjectionComponent
  },
  {
    path: 'service-get',
    component: PrimoComponentComponent
  },
  {
    path: 'service-set',
    component: SecondoComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
