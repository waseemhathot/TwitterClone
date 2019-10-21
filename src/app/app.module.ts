import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from 'src/app/Login/login.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import { RoutedModule } from 'src/app/Routed/routed.module';
import { CoreModule } from 'src/app/Core/core.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SharedModule,
    RoutedModule,
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


