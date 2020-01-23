import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;
  title = 'taskMgr';
  reason = '';

  darkTheme = false;
  constructor(private oc: OverlayContainer) {

  }

  switchTheme(dark) {
    this.darkTheme = dark;
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }
}
