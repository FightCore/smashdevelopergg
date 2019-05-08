import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchEvent: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  protected onSearch() {
    const searchInput = document.getElementById('search-input') as HTMLInputElement;

    if (this.searchEvent) {
      this.searchEvent.emit(searchInput.value);
    }
  }
}
