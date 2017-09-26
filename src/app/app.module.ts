

import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {HumanComponent} from './gallery/gallery.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full' },
  {path: 'gallery', component: HumanComponent},
  ];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true, useHash: true}
    )
  ],
  declarations: [
    AppComponent,
    HumanComponent,
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
