import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrl: './trash.component.scss'
})
export class TrashComponent implements OnInit {

  trashList: any;
  constructor(private noteService: NotesService) { }

  @Output() updateRefreshEvent = new EventEmitter<string>();


  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    this.noteService.getNotes().subscribe((response: any) => {
      console.log(response);
      this.trashList = response.data;
      this.trashList = this.trashList.filter((object: any) => {
        return object.isTrash == true;
      })
    })
  }

  restoreNoteFromTrash(notes: any) {
    let reqData = {
      notesId: notes.notesId
    }
    this.noteService.trashNote(reqData).subscribe((response: any) => {
      console.log(response);
      this.onSubmit();
    })
  }

}
