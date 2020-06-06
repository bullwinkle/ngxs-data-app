import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsDataPluginModule } from '@ngxs-labs/data';

import { AppComponent } from './app.component';
import { CountState } from './app.state';

@NgModule({
  imports: [
    BrowserModule,
    NgxsModule.forRoot([CountState], { developmentMode: true }),
    NgxsDataPluginModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
