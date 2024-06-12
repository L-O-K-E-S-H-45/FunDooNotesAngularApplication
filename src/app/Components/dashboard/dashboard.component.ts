import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  value: string = '';
  isFocused: boolean = false;

  @ViewChild('searchInput') searchInput!: ElementRef;

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


}
