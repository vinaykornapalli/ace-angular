import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TypedModule } from '@kuflink/angular-typed';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InternComponent } from './intern/intern.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    InternComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
