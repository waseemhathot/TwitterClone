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
    console.log(this.email, this.username, this.avatarUrl, this.password);
    this.userManagerService.register();
  }
}
