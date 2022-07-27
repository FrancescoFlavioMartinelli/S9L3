import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { InputPageComponent } from './input-page/input-page.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectionComponent } from './projection/projection.component';
import { ProjectedChildComponent } from './projected-child/projected-child.component';
import { ServicePageComponent } from './service-page/service-page.component';
import { PrimoComponentComponent } from './primo-component/primo-component.component';
import { SecondoComponentComponent } from './secondo-component/secondo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InputPageComponent,
    OutputPageComponent,
    NavbarComponent,
    ProjectionComponent,
    ProjectedChildComponent,
    ServicePageComponent,
    PrimoComponentComponent,
    SecondoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
