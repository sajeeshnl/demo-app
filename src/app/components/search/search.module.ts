import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { SearchSuggestionsModule } from '../search-suggestions/search-suggestions.module';

@NgModule({
    declarations: [
        SearchComponent
    ],
    exports: [
        SearchComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SearchSuggestionsModule
    ]
})

export class SearchModule {}