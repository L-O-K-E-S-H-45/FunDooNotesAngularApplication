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

  // colorArray: Array<any> = [
  //   { code: '#FF7F50', name: 'Coral' },
  //   { code: '#FFE5B4', name: 'peach' },
  //   { code: '#C2B280', name: 'sand' },
  //   { code: '#98FF98', name: 'mint' },
  //   { code: '#B2AC88', name: 'sage' },
  //   { code: '#DCDCDC', name: 'fog' },
  //   { code: '#708090', name: 'storm' },
  //   { code: '#4E4B66', name: 'dusk' },
  //   { code: '#FFB7C5', name: 'blossom' },
  //   { code: '#B66A50', name: 'clay' },
  //   { code: '#F5F5F5', name: 'chalk' },
  // ]

  colorArray: Array<any> = [
    { code: '#FF7F50', name: 'Coral' },
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'greenyellow' },
    { code: '#B0C4DE', name: 'LightSteelBlue' },
    { code: '#EEE8AA', name: 'PaleGoldenRod' },
    { code: '#7FFFD4', name: 'Aquamarine' },
    { code: '#FFE4C4', name: 'Bisque' },
    { code: '#C0C0C0', name: 'Silver' },
    { code: '#BC8F8F', name: 'RosyBrown' },
    { code: '#D3D3D3', name: 'grey' },
  ]

  selectColor(colors: any) {
    let reqData = {
      colorName: colors.name,
      notesId: this.notesObject.notesId
    }
    this.noteService.notesColor(reqData).subscribe((response: any) => {
      console.log(response);

    })
  }

}
