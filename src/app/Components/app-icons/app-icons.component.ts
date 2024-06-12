import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.scss'
})
export class AppIconsComponent implements OnInit {
  @Input() notesObject: any;
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  onArchive() {
    let reqData = {
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.noteService.archiveNotes(reqData).subscribe((response: any) => {
      console.log(response);
    })
  }

  onTrash() {
    let reqData = {
      notesId: this.notesObject.notesId
    }
    console.log(reqData)
    this.noteService.trashNote(reqData).subscribe((response: any) => {
      console.log(response);
    })
  }

}
