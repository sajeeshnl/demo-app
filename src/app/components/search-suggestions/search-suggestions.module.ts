import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSuggestionsComponent } from './search-suggestions.component';
import { ProfileImageModule } from '../profile-image/profile-image.module';

@NgModule({
    imports: [
        CommonModule,
        ProfileImageModule
    ],
    exports: [SearchSuggestionsComponent],
    declarations: [SearchSuggestionsComponent]
})

export class SearchSuggestionsModule {}