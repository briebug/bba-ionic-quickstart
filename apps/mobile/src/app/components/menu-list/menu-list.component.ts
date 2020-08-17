import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bba-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
})
export class MenuListComponent implements OnInit {
  @Input() pages;
  @Input() dark;
  @Output() darkChange = new EventEmitter();

  selectedIndex = 0;

  ngOnInit() {
    this.getSelectedPageIndex();
  }

  getSelectedPageIndex() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.pages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }

  setSelectedPage(index) {
    this.selectedIndex = index;
  }
}
