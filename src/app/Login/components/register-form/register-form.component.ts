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

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userManagerService.register({
      email: this.email,
      userHandle: this.username,
      avatarUrl: this.avatarUrl,
      password: this.password
    })
    .catch(_ => alert('registeration failed, please try again'));
  }
}
