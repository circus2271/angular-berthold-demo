import { Component, OnInit, VERSION } from '@angular/core';
import { NavigationStart, Router, Scroll } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  mobileNavbarOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    // this.router.events
    //   .pipe(
    //     filter(
    //       (e) => e instanceof NavigationStart && this.mobileNavbarOpen === true
    //     )
    //   )
    //   .subscribe(() => (this.mobileNavbarOpen = false));

    // this.router.events
    //   .pipe(filter((e) => e instanceof Scroll))
    //   .subscribe((e) => {
    //     const anchor = (e as Scroll).anchor;
    //     if (anchor) {
    //       const element = document.getElementById(anchor);
    //       if (element) element.scrollIntoView({ behavior: 'smooth' });
    //     }

    //     if (!anchor) {
    //       scrollTo(0, 0);
    //     }
    //   });

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
