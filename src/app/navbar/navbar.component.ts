import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() mobileNavbarOpen: boolean = false;
  @Output() mobileNavbarOpenChange = new EventEmitter<boolean>();
  constructor() {}

  closeMobileMenu() {
    this.mobileNavbarOpenChange.emit(false);
  }

  openMobileMenu() {
    this.mobileNavbarOpenChange.emit(true)
  }
}
