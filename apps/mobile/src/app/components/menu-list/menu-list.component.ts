import { Component, Input } from '@angular/core';

@Component({
  selector: 'bba-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent {
  @Input() pages;
}
