import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './Routed/home-page/home-page.component';
import { ProfilePageComponent } from './Routed/profile-page/profile-page.component';
import { LoginPageComponent } from './Routed/login-page/login-page.component';
import { RegisterPageComponent } from './Routed/register-page/register-page.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
