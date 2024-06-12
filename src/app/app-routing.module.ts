import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';


const routes: Routes = [
  {
    path: 'home', component: DashboardComponent,
    children: [
      { path: '', redirectTo: '/home/notescontainer', pathMatch: 'full' },
      { path: 'notescontainer', component: NotesContainerComponent },
      { path: 'notes', component: AddNoteComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
