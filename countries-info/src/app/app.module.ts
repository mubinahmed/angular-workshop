import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountryService } from './services/country.service';
import { StateComponent } from './state/state.component';
import { appRouterModule } from './app.routes';
import { HttpModule } from '@angular/http'


@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRouterModule
  ],
  providers: [CountryService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
