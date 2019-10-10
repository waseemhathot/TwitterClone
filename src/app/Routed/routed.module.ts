import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/Shared/shared.module';
import { LoginModule } from 'src/app/Login/login.module';

import { HomePageComponent } from 'src/app/Routed/home-page/home-page.component';
import { ProfilePageComponent } from 'src/app/Routed/profile-page/profile-page.component';
import { LoginPageComponent } from 'src/app/Routed/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/Routed/register-page/register-page.component';

@NgModule({
    declarations: [
        HomePageComponent,
        ProfilePageComponent,
        LoginPageComponent,
        RegisterPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        LoginModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [
        HomePageComponent,
        ProfilePageComponent,
        LoginPageComponent,
        RegisterPageComponent,
    ]
})
export class RoutedModule { }
