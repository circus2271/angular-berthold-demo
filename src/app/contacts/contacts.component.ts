import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface Placemark {
  center: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  // @ViewChild('additionalInfo') additionalInfo!: ElementRef<HTMLDivElement>
  mapIsReady: boolean = false;

  placemark: Placemark = {
    center: [59.928434, 30.311994],
    properties: {
      hintContent: 'Бертгольд Центр',
      balloonContent: 'Бертгольд Центр',
    },
    options: {
      preset: 'islands#blueIcon',
    },
  };

  constructor() {}

  ngOnInit() {}
}
