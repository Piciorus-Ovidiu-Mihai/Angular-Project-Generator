import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/libs/auth/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginFormGroup = this.formBuilder.group({
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
  });
  authenticationError = false;

  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { }

  login(): void {
    this.loginService
      .login({
        username: this.loginFormGroup.get('username')!.value,
        password: this.loginFormGroup.get('password')!.value,
        rememberMe: false,
      })
      .subscribe(
        () => {
          this.authenticationError = false;
          if (!this.router.getCurrentNavigation()) {
            // There were no routing during login (eg from navigationToStoredUrl)
            this.router.navigate(['']);
          }
        },
        () => (this.authenticationError = true)
      );
  }

  onSubmit(): void {
    if (this.loginFormGroup.invalid) {
      return;
    }
    this.login();
  }
}
