import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../../constants';
import { ApiService } from '../../services/api.service';
import { User } from '../../models/user';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: IUser;
  registerForm: FormGroup;
  errorMessage: string;

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private route: Router) {
    this.registerForm = fb.group({
      orangeFormName: ['', Validators.required],
      orangeFormEmail: ['', [Validators.required, Validators.email]],
      orangeFormPass: ['', [Validators.required]]
    });
  }

  ngOnInit() {
  }

  register() {
    if (this.registerForm.invalid)
      return Constants.Validation.invalid;
    this.user = new User();
    this.user.userName = this.registerForm.value.orangeFormName;
    this.user.email = this.registerForm.value.orangeFormEmail;
    this.user.password = this.registerForm.value.orangeFormPass;
    this.apiService.post(Constants.UrlConstants.register, this.user).
      subscribe(
        data => { 
          this.onSuccess(); 
        },
        error => {
          this.errorMessage = Constants.Validation.registerError;
        });
  }

  onSuccess(): any {
    this.route.navigate(['login'])
  }
}
