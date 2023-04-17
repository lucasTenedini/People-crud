import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'people-crud';
  dontHaveCredentials = false

  constructor(private router: Router) {
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd)
        this.dontHaveCredentials = (route.url === '/sing-in') ? true : false;
    });
  }
}
