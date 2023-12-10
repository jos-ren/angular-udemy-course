import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonClicked = false;
  allClicks = [];
  timesClicked = 0;

  onButtonClick() {
    this.timesClicked = this.timesClicked + 1;
    this.buttonClicked = !this.buttonClicked;
    this.allClicks.push(this.timesClicked + ' button clicks. ' + new Date().toLocaleTimeString());
  }
}
