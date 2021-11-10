import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.scss']
})
export class ProfileImageComponent implements OnInit {

  @Input()
  imageUrl: string = 'assets/images/avatar3.jpeg';
  @Input()
  imageSize: number = 48;

  constructor() { }

  ngOnInit(): void {
  }

}
