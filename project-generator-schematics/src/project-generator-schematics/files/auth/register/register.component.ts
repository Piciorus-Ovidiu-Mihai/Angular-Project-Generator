import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/libs/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  @ViewChild('login', { static: false })
  login?: ElementRef;

  doNotMatch = false;
  error = false;
  errorEmailExists = false;
  errorUserExists = false;
  success = false;

  registerFormGroup = this.fb.group({
    login: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
        Validators.pattern('^[a-zA-Z0-9!$&*+=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$|^[_.@A-Za-z0-9-]+$'),
      ],
    ],
    email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(254), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
  });

  constructor(private authService: AuthService, private fb: FormBuilder) { }

  ngAfterViewInit(): void {
    if (this.login) {
      this.login.nativeElement.focus();
    }
  }

  register(): void {
    this.doNotMatch = false;
    this.error = false;
    this.errorEmailExists = false;
    this.errorUserExists = false;

    const password = this.registerFormGroup.get(['password'])!.value;
    if (password !== this.registerFormGroup.get(['confirmPassword'])!.value) {
      this.doNotMatch = true;
    } else {
      const login = this.registerFormGroup.get(['login'])!.value;
      const email = this.registerFormGroup.get(['email'])!.value;
      // this.registerService.save({ login, email, password, langKey: this.translateService.currentLang }).subscribe(
      //   () => (this.success = true),
      //   (response: any) => this.processError(response)
      // );
    }
  }

  onSubmit(): void {
    if (this.registerFormGroup.invalid) {
      return;
    }
    this.register();
  }

  private processError(response: HttpErrorResponse): void {
    // if (response.status === 400 && response.error.type === LOGIN_ALREADY_USED_TYPE) {
    //   this.errorUserExists = true;
    // } else if (response.status === 400 && response.error.type === EMAIL_ALREADY_USED_TYPE) {
    //   this.errorEmailExists = true;
    // } else {
    //   this.error = true;
    // }
  }
}
