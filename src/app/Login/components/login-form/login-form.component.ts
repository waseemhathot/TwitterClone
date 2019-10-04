import { Component, OnInit, Input } from '@angular/core';
import { UserManagerService } from 'src/app/Login/services/user-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @Input() serverUrl: string;
  email: string;
  password: string;

  constructor(private userManagerService: UserManagerService, private router: Router) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.userManagerService.login(this.email, this.password)
    .then(() => this.router.navigate(['home']))
    .catch(() => alert('Login failed, please try again'));
  }
}
