import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';


import { AppComponent } from './app.component';

import { CapitalizadoPipe } from './pipes/capitalizado.pipe';


import { registerLocaleData } from '@angular/common'
import localeEs from '@angular/common/locales/es-AR';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es-AR"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
