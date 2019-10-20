import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagerService } from './services/user-manager.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
    declarations: [LoginFormComponent, RegisterFormComponent, ],
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        SharedModule,
    ],
    providers: [
        UserManagerService,
    ],
    bootstrap: [],
    exports: [LoginFormComponent, RegisterFormComponent]
})
export class LoginModule { }
