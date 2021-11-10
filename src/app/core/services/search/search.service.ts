import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { appConfig } from '../../../config/config'

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    constructor(private httpService: HttpService) {}
    getSuggestions(searchKey, offset ) {
        const url = `${appConfig.API.BASE_URL}?offset=${offset}&limit=20&query=${searchKey}`;
        return this.httpService.get(url);
    }
}