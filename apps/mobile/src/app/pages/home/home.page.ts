import { Component } from '@angular/core';
import { UsersFacade } from '@bba/core-state';

@Component({
  selector: 'bba-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user$ = this.usersFacade.selectedUser$;

  constructor(
    private usersFacade: UsersFacade
  ) {}
}
