import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventComponent } from './event/event.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'event',component:EventComponent},
  {path:'courses',component:CoursesComponent},
  {path: 'login', component:LoginComponent},
  {path:'donate',component:DonateComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'bakery',component:BakeryComponent},
  {path:'basic-computer',component:BasicComputerComponent},
  {path:'basket',component:BasketComponent},
  {path:'cosmetic',component:CosmeticComponent},
  {path:'handmade',component:HandmadeComponent},
  {path:'sewing',component:SewingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
