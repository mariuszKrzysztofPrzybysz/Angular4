import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyFormatDirective } from './zippy-format.directive';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormatDirective,
    ZippyFormatDirective,
    AddressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
