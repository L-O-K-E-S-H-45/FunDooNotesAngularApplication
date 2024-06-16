import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from '../../Services/notes/notes.service';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.scss'
})
export class AddNoteComponent implements OnInit {
  noteForm!: FormGroup

  @Output() refreshAddEvent = new EventEmitter<string>();

  @ViewChild('panel') panel: MatExpansionPanel | undefined;

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

  closePanel(panel: MatExpansionPanel) {
    panel.close();
  }

}
