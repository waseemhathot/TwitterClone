import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../Routed/home-page/home-page.component';
import { ProfilePageComponent } from 'src/app/Routed/profile-page/profile-page.component';
import { LoginPageComponent } from '../Routed/login-page/login-page.component';
import { RegisterPageComponent } from '../Routed/register-page/register-page.component';


const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'register', component: RegisterPageComponent },
    { path: 'home', component: HomePageComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
