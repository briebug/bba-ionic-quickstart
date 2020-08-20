import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bba-social-share',
  templateUrl: './social-share.component.html',
  styleUrls: ['./social-share.component.scss'],
})
export class SocialShareComponent {
  @Output() shared = new EventEmitter();
}
