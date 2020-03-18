import { Component, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-companies-search',
  templateUrl: './companies-search.component.html',
  styleUrls: ['./companies-search.component.scss']
})
export class CompaniesSearchComponent {
  @Output() searchTermEmitter: EventEmitter<string> = new EventEmitter();

  searchTerm: string;
  searchTermChanged: Subject<string> = new Subject<string>();

  constructor() {
    this.searchTermChanged.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(
        searchTerm => {
          this.searchTerm = searchTerm
          this.searchTermEmitter.emit(searchTerm)
        }
      )
  }

  searchChanged(text: string) {
    this.searchTermChanged.next(text)
  }

}
