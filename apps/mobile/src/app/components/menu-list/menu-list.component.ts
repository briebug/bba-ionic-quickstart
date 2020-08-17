import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bba-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent {
  @Input() pages;
  @Input() dark;
  @Output() darkChange = new EventEmitter();
}
