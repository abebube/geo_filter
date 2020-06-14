import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { UtilitiesService } from './utilities/utilities.service';
import { FormsModule } from '@angular/forms';
import { GeoHelpersService } from './utilities/geo-helpers.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    UtilitiesService,
    GeoHelpersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
