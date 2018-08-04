import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

  public SetCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

}
