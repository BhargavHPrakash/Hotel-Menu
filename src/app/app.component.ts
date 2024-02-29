import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobileView: boolean | undefined;
  ngOnInit() {
    if (window.innerWidth < 649) {
      this.mobileView = false;
      console.log(this.mobileView);
    }
    else {
      this.mobileView = true;
      console.log(this.mobileView);
    }
  }
}
