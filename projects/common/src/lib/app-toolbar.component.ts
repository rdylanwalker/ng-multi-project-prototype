import { Component, ElementRef, Input } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { Platform } from "@angular/cdk/platform";

@Component({
  selector: 'lib-common-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styles: []
})
export class AppToolbarComponent extends MatToolbar {
  @Input() title = 'Default Title';

  constructor(elementRef: ElementRef, _platform: Platform) {
    super(elementRef, _platform);
  }

}
