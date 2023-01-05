import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mobileNavbarOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart && this.mobileNavbarOpen) {
        this.mobileNavbarOpen = false;
      }

      if (e instanceof Scroll) {
        const anchor = e.anchor;

        if (anchor) {
          const element = document.getElementById(anchor);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }

        if (!anchor) scrollTo(0, 0);
      }
    });
  }
}
