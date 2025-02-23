import { Component } from '@angular/core';

@Component({
  selector: 'app-page-container',
  imports: [],
  templateUrl: './page-container.component.html',
  styleUrl: './page-container.component.css'
})
// page-container.component.ts
export class PageContainerComponent {
  isSidebarVisible = true;
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}

