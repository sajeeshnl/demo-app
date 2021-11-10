import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from 'src/app/core/services/search/search.service';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-search-suggestions',
  templateUrl: './search-suggestions.component.html',
  styleUrls: ['./search-suggestions.component.scss']
})

export class SearchSuggestionsComponent implements OnChanges {

  constructor(private searchService: SearchService) {}

  @Input()
  searchKey: string = '';
  @Output()
  completeDataLoaded: EventEmitter<boolean> = new EventEmitter<boolean>();
  destroy$: Subject<boolean> = new Subject<boolean>();
  searchSuggestions: any = [];
  totalMessages: number = 0;
  loadCount: number = 1;
  showLoadMore: boolean = false;

  ngOnChanges() {
    this.loadMessages(0);
  }

  loadMessages(offset) {
    if (offset === 0) {
      this.loadCount = 1;
    }
    if (this.searchKey) {
      this.searchService.getSuggestions(this.searchKey, offset)
      .pipe(debounceTime(3000), takeUntil(this.destroy$))
      .subscribe(data => {
        this.totalMessages = data.total_messages_count;
        this.searchSuggestions = data.messages;
        this.showLoadMore = offset === 0 || this.loadCount * 20 < this.totalMessages;
        if (this.searchSuggestions.length === 0) {
          this.completeDataLoaded.emit(true);
        } else {
          this.completeDataLoaded.emit(false);
        }
      });
    } else {
      this.searchSuggestions = [];
      this.showLoadMore = false;
    }
  }

  loadMoreMessages() {
    console.log('in load more')
    const offset = this.loadCount * 20;
    this.loadCount++;
    this.loadMessages(offset);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }



}
