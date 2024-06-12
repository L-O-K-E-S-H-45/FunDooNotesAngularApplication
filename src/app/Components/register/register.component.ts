import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/users/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'

})
export class RegisterComponent implements OnInit {
  LoginForm!: FormGroup

  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.LoginForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: ['']
    })
  }

  onRegister() {
    let data = {
      firstName: this.LoginForm.value.firstName,
      lastName: this.LoginForm.value.lastName,
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }

    // console.log('Password:', this.LoginForm.value.password);
    // console.log('Confirm Password:', this.LoginForm.value.confirmPassword);

    if (this.LoginForm.value.password === this.LoginForm.value.confirmPassword) {
      this.userService.Register(data).subscribe((response: any) => {
        console.log(response);
      })
    }
    else {
      alert("Password missmatch")
    }
  }

}
