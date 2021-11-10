import { animate, trigger, style, transition, AUTO_STYLE } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

trigger('menuOpenAnimation', [
  transition(':enter', [
    style({ height: 0, opacity: 0 }),
    animate('0.4s ease-out', style({ height: AUTO_STYLE, opacity: 100 }))
  ]),
  transition(':leave', [
    style({ height: AUTO_STYLE, opacity: 0.5 }),
    animate('0.4s ease-in', style({ height: 0, opacity: 0 }))
  ])
])

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  animations: [
    trigger('searchResultAnimation', [
      transition(':enter', [
        style({height: 0, opacity: 0}),
        animate('0.4s ease-out', style({height: AUTO_STYLE, opacity: 100}))
      ])
    ])
  ]
})

export class SearchComponent {
  @Input()
  palceHolder = '';

  searchInput = new FormControl('');
  isSearchActive = false;
  isCompleteDataLoaded = false;

  onFocus() {
    this.isSearchActive = true;
  }

  onBlur() {
    //this.isSearchActive = false;
  }

  completeDataLoaded(completed) {
    this.isCompleteDataLoaded = completed;
  }
}