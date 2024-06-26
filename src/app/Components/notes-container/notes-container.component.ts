import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrl: './notes-container.component.scss'
})
export class NotesContainerComponent implements OnInit {

  notesArray: any[] = [];

  constructor(private noteService: NotesService) { }
  ngOnInit(): void {
    this.onAddNote();
  }

  onAddNote() {
    this.noteService.getNotes().subscribe((response: any) => {
      console.log(response);
      this.notesArray = response.data || [];
      // console.log(this.notesArray);
      // if (this.notesArray.length > 0) {
      //   console.log(this.notesArray[0].title)
      // }

      this.notesArray = this.notesArray.filter((object: any) => {
        return object.isArchive == false;
      })
      this.notesArray = this.notesArray.filter((object: any) => {
        return object.isTrash == false;
      })

      this.notesArray.reverse();
    })
  }

  addEvent($event: any) {
    console.log('added note refreshed automatically by event');
    console.log($event);
    this.onAddNote()
  }

  recievedRefresheventFromDisplayToGetAll($event: any) {
    console.log('Refresh event for update from notes-continer')
    console.log($event);
    this.onAddNote();
  }

}
