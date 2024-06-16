import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../Services/DataService/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  value: string = '';
  isFocused: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

  @Output() updateRefreshEvent = new EventEmitter<string>();

  constructor(private route: Router, private dataService: DataService) { }

  onFocus() {
    this.isFocused = true;
    // this code is for search button
    this.searchInput.nativeElement.focus();
  }

  onBlur() {
    this.isFocused = false;
  }

  clearValue() {
    this.value = '';
  }

  archiveNotes() {
    this.route.navigateByUrl('/home/archives');
  }

  homePage() {
    this.route.navigateByUrl('/home/notes')
  }

  search(event: any) {
    console.log(event.target.value);
    this.dataService.outgoingData(event.target.value);
  }

}
