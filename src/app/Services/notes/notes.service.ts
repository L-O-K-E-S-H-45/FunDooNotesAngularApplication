import { Injectable, OnInit } from '@angular/core';
import { HttpService } from '../http/http.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token: any;
  noteForm!: FormGroup

  constructor(private httpService: HttpService) { this.token = localStorage.getItem('token') }

  AddNote(data: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(this.token)
    return this.httpService.postServiceReset('https://localhost:44348/api/Notes/CreateNote', data, true, header);
  }

  addNotes(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44348/api/Notes/CreateNote', reqData, true, header);
  }

  getNotes() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.getService('https://localhost:44348/api/Notes/user', true, header);
  }

  archiveNotes(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44348/api/Notes/ToggleArchive?notesId=' + reqData.notesId, {}, true, header);
  }

  trashNote(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44348/api/Notes/ToggleTrash?notesId=' + reqData.notesId, {}, true, header);
  }

  updateNote(reqData: any, noteId: any) {
    let header = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpService.putService('https://localhost:44348/api/Notes/Update/' + noteId, reqData, true, header);
  }

}
