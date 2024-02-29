import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() mobileView: boolean | undefined;  
  isNavbarBlurred: boolean = false;
  @HostListener('window:scroll', []) /* this decorator must be above the onWindowScroll() only */
  onWindowScroll() {
    // logic to check scroll position and toggle blur class
    if (window.scrollY > 25) {
      this.isNavbarBlurred = true;
    } else {
      this.isNavbarBlurred = false;
    }
  }
}
