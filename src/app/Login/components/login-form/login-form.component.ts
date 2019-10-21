import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    email: string;
    password: string;
    showSignIn = true;
    showFailMessage = false;

    constructor(private userManagerService: UserManagerService) { }

    ngOnInit() {
    }

    async onSubmit() {
        this.showSignIn = false;
        this.userManagerService.login(this.email, this.password).then(_ => {
            this.showSignIn = true;
            this.showFailMessage = false;
        })
        .catch(_ => {
            this.showFailMessage = true;
            this.showSignIn = true;
        });
    }
}
