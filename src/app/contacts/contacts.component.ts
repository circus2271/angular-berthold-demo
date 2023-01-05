import { Component } from '@angular/core';

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
export class ContactsComponent {
  mapIsReady: boolean = false;
  phoneNumbers = [
      '+7 (812) 241-73-60',
      '+7 (812) 241-73-60'
  ]

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
}
