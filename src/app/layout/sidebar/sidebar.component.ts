import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  isSidenavOpen = true;
  sidenavMode: 'side' | 'over' = 'side';

  constructor (private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 856px']).subscribe(result => {
      if (result.matches) {
        this.sidenavMode = 'over';
        this.isSidenavOpen = false;
      } else {
        this.sidenavMode = 'side';
        this.isSidenavOpen = true;

      }
    })
  }

  toggleSidenav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }
}
