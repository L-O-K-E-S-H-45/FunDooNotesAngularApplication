import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/notes/notes.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrl: './archive.component.scss'
})
export class ArchiveComponent implements OnInit {
  archiveList: any;
  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
    this.onSubmit();
  }

  onSubmit() {
    this.noteService.getNotes().subscribe((response: any) => {
      this.archiveList = response.data;
      this.archiveList = this.archiveList.filter((object: any) => {
        return object.isArchive == true && object.isTrash == false;
      })
      console.log(this.archiveList);
    })
  }

  recievedRefreshRestoreEventFromArchive($event: any) {
    console.log($event)
    this.onSubmit();
  }

}
