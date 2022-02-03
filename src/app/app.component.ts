import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  readonly themeAnchor=this.document.getElementById('app-theme');

  constructor(@Inject(DOCUMENT) private document: Document, private render: Renderer2) {

  }

  ngOnInit(): void {
    // this.render.removeClass(this.document.body, 'dark-theme');
    // this.render.addClass(this.document.body, 'light-theme');
  }

  setTheme({ source }: MatSelectChange) {
    if (source.value == 'light') {
     this.render.setAttribute(this.themeAnchor,'href','/light-theme.css')
    } else {
      this.render.setAttribute(this.themeAnchor,'href','/dark-theme.css')

    }
  }

  // setTheme({ source }: MatSelectChange) {
  //   if (source.value == 'light') {
  //     this.render.removeClass(this.document.body, 'dark-theme');
  //     this.render.addClass(this.document.body, 'light-theme');
  //   } else {
  //     this.render.removeClass(this.document.body, 'light-theme');
  //     this.render.addClass(this.document.body, 'dark-theme');
  //   }
  // }
  // constructor(private overlayContainer: OverlayContainer) {

  // }

  // ngOnInit(): void {
  //   this.overlayContainer.getContainerElement().classList.add('dark-theme');
  //   this.overlayContainer.getContainerElement().classList.remove('light-theme');
  //   this.currentTheme = 'dark-theme';
  // }
  // setTheme({ source }: MatSelectChange) {
  //   if (source.value === 'light') {

  //     this.overlayContainer.getContainerElement().classList.add('light-theme');
  //     this.overlayContainer.getContainerElement().classList.remove('dark-theme');
  //     this.currentTheme = 'light-theme';
  //   } else {
  //     this.overlayContainer.getContainerElement().classList.add('dark-theme');
  //     this.overlayContainer.getContainerElement().classList.remove('light-theme');
  //     this.currentTheme = 'dark-theme';
  //   }
  // }
}
