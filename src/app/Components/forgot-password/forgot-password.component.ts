import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../Services/users/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['']
    })
  }

  onForgotPassword() {
    let data = {
      email: this.forgotForm.value.email
    }

    this.userService.ForgotPassword(data).subscribe((response: any) => {
      console.log(response);
    })
  }

}
