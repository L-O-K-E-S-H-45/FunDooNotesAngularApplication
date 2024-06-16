import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddNoteComponent } from './Components/add-note/add-note.component';
import { NotesContainerComponent } from './Components/notes-container/notes-container.component';
import { authguard } from './Components/shared/auth.guard';
import { ArchiveComponent } from './Components/archive/archive.component';
import { TrashComponent } from './Components/trash/trash.component';
import { TodoComponent } from './Components/todo/todo.component';


const routes: Routes = [
  {
    path: 'home', component: DashboardComponent,
    canActivate: [authguard],
    children: [
      { path: '', redirectTo: '/home/notes', pathMatch: 'full' },
      { path: 'notes', component: NotesContainerComponent },
      { path: 'archives', component: ArchiveComponent },
      { path: 'trash', component: TrashComponent },
      { path: 'addnote', component: AddNoteComponent },
      { path: 'todo', component: TodoComponent },
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
