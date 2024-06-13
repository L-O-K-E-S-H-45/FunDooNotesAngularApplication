import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent implements OnInit {
  noteForm!: FormGroup

  @Output() refreshAddEvent = new EventEmitter<string>();

  constructor(private noteService: NotesService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: [''],
      description: ['']
    })
  }

  onAddNote() {
    let data = {
      title: this.noteForm.value.title,
      description: this.noteForm.value.description
    }
    this.noteService.AddNote(data).subscribe((response: any) => {
      console.log(response);
      this.refreshAddEvent.emit(response);
    })
  }

}
