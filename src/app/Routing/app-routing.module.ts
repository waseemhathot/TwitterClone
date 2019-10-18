import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from 'src/app/Routed/home-page/home-page.component';
import { ProfilePageComponent } from 'src/app/Routed/profile-page/profile-page.component';
import { LoginPageComponent } from 'src/app/Routed/login-page/login-page.component';
import { RegisterPageComponent } from 'src/app/Routed/register-page/register-page.component';


const routes: Routes = [
    { path: 'home', component: HomePageComponent },
    { path: 'profile/:id', component: ProfilePageComponent },
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
