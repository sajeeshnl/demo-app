import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ModalService {
    
    public isSearchModal:boolean = false;

    showSearchModal() {
        this.isSearchModal = true;
    }
}

