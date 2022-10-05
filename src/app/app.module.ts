import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Añadimos HttpClientModule para poder conectar con el swagger
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavbarComponent } from './protected/components/navbar';
import { NavbarComponent } from './protected/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
