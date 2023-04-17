import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Menu } from 'src/app/shared/interface/menu.interface';
import { MENU } from 'src/app/shared/mock/menu';
import { LoginService } from 'src/app/shared/services/login/login.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  public menu: Menu[] = MENU;
  dontHaveCredentials!: boolean;

  close(): void {
    this.sidenav.close();
  }

  navigate(url: string): void {
    this.router.navigate([url])
    this.close()
  }

  logOut(): void {
    this.loginService.logout();
  }

  constructor(private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

}
