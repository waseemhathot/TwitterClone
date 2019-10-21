import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/Shared/components/modal/modal.component';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    email: string;
    password: string;

    @ViewChild('modal', { static: false }) modal: ModalComponent;

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
