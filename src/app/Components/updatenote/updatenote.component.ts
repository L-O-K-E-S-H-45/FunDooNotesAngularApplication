import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrl: './updatenote.component.scss'
})
export class UpdatenoteComponent implements OnInit {

  title: any;
  description: any;
  id: any;
  color: any;

  @Output() updateRefreshEvent = new EventEmitter<string>();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogbox: MatDialogRef<UpdatenoteComponent>,
    private noteService: NotesService
  ) {
    this.title = data.title,
      this.description = data.description,
      this.id = data.notesId,
      this.color = data.color
  }

  ngOnInit(): void {

  }

  adjustTextareaHeight(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto'; // Reset the height to auto to calculate the scrollHeight correctly
    const newHeight = Math.min(textarea.scrollHeight, 200); // Limit the height to a maximum of 200px
    textarea.style.height = `${newHeight}px`;
    textarea.style.overflow = newHeight === 200 ? 'auto' : 'hidden'; // Make it scrollable if it reaches 200px
  }

  closeDialog() {
    let reqData = {
      title: this.title,
      description: this.description,
      color: this.color
    }
    this.noteService.updateNote(reqData, this.id).subscribe((response: any) => {
      console.log(response);
      this.dialogbox.close()
    })
  }

  recievedRefreshIconEventFromUpdate($event: any) {
    console.log($event);
    this.updateRefreshEvent.emit($event);
  }

}
