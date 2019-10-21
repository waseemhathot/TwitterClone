import { Component, OnInit } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  email: string;
  username: string;
  avatarUrl = '';
  password: string;
  showRegister = true;
  showFailMessage = false;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.showRegister = false;
    this.userManagerService.register({
      email: this.email,
      userHandle: this.username,
      avatarUrl: this.avatarUrl,
      password: this.password
    }).then(_ => {
      this.showRegister = true;
      this.showFailMessage = false;
    })
    .catch(_ => {
      this.showFailMessage = true;
      this.showRegister = true;
    });
  }
}
