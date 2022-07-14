import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-h-menu',
  templateUrl: './h-menu.component.html',
  styleUrls: ['./h-menu.component.css']
})
export class HMenuComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(event: any): void {
    this.router.navigate(['/login']);
  }

}
