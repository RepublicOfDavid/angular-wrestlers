import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrestlersComponent } from './components/wrestlers/wrestlers.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { WrestlerDetailComponent } from './components/wrestler-detail/wrestler-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WrestlersComponent,
    HeaderComponent,
    WrestlerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
