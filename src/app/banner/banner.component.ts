import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  // @HostBinding()
  // hostClass = true;

  @Input()
  message = '';

  @HostBinding('class')
  get hostClass() {
    if (this.type !== 'none') {
      return `app-banner-${this.type}`;
    }else return '';
  }

  @Input()
  type: 'success' | 'info' | 'warn' | 'none' = 'none';

  constructor() { }

  ngOnInit(): void {
  }

}
