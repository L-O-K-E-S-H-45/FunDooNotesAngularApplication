import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { audit } from 'rxjs';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrl: './display-notes.component.scss'
})
export class DisplayNotesComponent implements OnInit {

  filterNote: any;

  constructor(private dialog: MatDialog, private dataService: DataService) { }
  message: any;
  @Input() notesList: any;
  @Output() updateRefreshEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.dataService.incomingData.subscribe((response: any) => {
      console.log('Search in process: ', response);
      this.filterNote = response;
    })
  }

  editNoteDialogBox(notes: any) {
    const dialogbox = this.dialog.open(UpdatenoteComponent, {
      width: '40%',
      height: 'auto',
      data: notes
    })
    dialogbox.afterClosed().subscribe(result => {
      console.log(result);
      this.updateRefreshEvent.emit(result);
    })
  }

  recievedRefreshIconEvent($event: any) {
    console.log('Icon to Display ');
    console.log($event)
    // this.message = $event;
    this.updateRefreshEvent.emit($event);
  }

}
