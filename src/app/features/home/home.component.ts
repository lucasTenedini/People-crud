import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userName: string = "You don't have userName :C"
  constructor() { }

  ngOnInit(): void {
    const userName = localStorage.getItem('userName')
    if (!!userName)
      this.userName = userName;
    console.log(this.userName);

  }

}
