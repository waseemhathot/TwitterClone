import { Component, OnInit, Input } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    email: string;
    password: string;

    constructor(private userManagerService: UserManagerService) { }

    ngOnInit() {
    }

    async onSubmit() {
        this.userManagerService.login(this.email, this.password)
        .catch(_ => {
            alert('Login failed, please try again');
        });
    }
}
