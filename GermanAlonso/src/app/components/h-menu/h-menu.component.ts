import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-h-menu',
  templateUrl: './h-menu.component.html',
  styleUrls: ['./h-menu.component.css']
})
export class HMenuComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    alert("Click");
  }

}
