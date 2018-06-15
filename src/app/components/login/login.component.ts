import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../../constants';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: IUser;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router,
    private auth: AuthService) {
    this.loginForm = fb.group({
      defaultFormEmail: ['', [Validators.required, Validators.email]],
      defaultFormPass: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.invalid)
      return Constants.Validation.invalid;
    this.user = new User();
    this.user.email = this.loginForm.value.defaultFormEmail;
    this.user.password = this.loginForm.value.defaultFormPass;
    this.apiService.post(Constants.UrlConstants.login, this.user).
      subscribe(data => {
        console.log(data);
        this.auth.login(data);
      });
  }

}
