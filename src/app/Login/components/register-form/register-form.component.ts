import { Component, OnInit } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { UserCredentials } from '../../interfaces/user';
import { Router } from '@angular/router';

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

  constructor(private userManagerService: UserManagerService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userManagerService.register({
      email: this.email,
      userHandle: this.username,
      avatarUrl: this.avatarUrl,
      password: this.password
    })
    .then(data => {
      this.router.navigate(['home']);
    });
  }
}
