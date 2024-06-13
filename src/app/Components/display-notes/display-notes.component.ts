import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { audit } from 'rxjs';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @Input() notesList: any;
  @Output() updateAutoRefresh = new EventEmitter<string>();

  ngOnInit(): void {

  }

  editNoteDialogBox(notes: any) {
    const dialogbox = this.dialog.open(UpdatenoteComponent, {
      width: '40%',
      height: 'auto',
      data: notes
    })
    dialogbox.afterClosed().subscribe(result => {
      console.log(result);
      this.updateAutoRefresh.emit(result);
    })
  }

}
