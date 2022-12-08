import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() mobileNavbarOpen: boolean = false;
  @Output() mobileNavbarOpenChange = new EventEmitter<boolean>();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(console.log);
  }

  toggleMobileMenu() {
    this.mobileNavbarOpenChange.emit(false);
  }

  openMobileMenu() {
    this.mobileNavbarOpenChange.emit(true)
  }
}
