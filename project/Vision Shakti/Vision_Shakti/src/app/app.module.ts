import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
import { FormsModule } from '@angular/forms';
import { CoursesComponent } from './courses/courses.component';
import { LoginComponent } from './login/login.component';
import { DonateComponent } from './donate/donate.component';
import { ForgotComponent } from './forgot/forgot.component';
import { BakeryComponent } from './bakery/bakery.component';
import { BasicComputerComponent } from './basic-computer/basic-computer.component';
import { BasketComponent } from './basket/basket.component';
import { CosmeticComponent } from './cosmetic/cosmetic.component';
import { HandmadeComponent } from './handmade/handmade.component';
import { SewingComponent } from './sewing/sewing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    EventComponent,
    CoursesComponent,
    LoginComponent,
    DonateComponent,
    ForgotComponent,
    BakeryComponent,
    BasicComputerComponent,
    BasketComponent,
    CosmeticComponent,
    HandmadeComponent,
    SewingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [ 
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
