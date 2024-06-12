import { Component, OnInit } from '@angular/core';
import { UserService } from '../../Services/users/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cwd } from 'process';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup

  constructor(private user: UserService, private formbuilder: FormBuilder) { }
  ngOnInit(): void {
    this.LoginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onLogin() {
    let data = {
      email: this.LoginForm.value.email,
      password: this.LoginForm.value.password
    }
    this.user.Login(data).subscribe((response: any) => {
      console.log(response);
      localStorage.setItem("token", response.data);
    })
  }

}
