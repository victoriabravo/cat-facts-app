import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FactListComponent } from './components/fact-list/fact-list.component';
import { FactDetailComponent } from './components/fact-detail/fact-detail.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './components/material/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FactListComponent,
    FactDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: FactListComponent},
      {path: 'fact-list', component: FactListComponent},
      {path: 'fact-detail', component: FactDetailComponent}
    ]),
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
