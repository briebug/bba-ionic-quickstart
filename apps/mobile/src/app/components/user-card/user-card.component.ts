import { Component, Input } from '@angular/core';
import { User } from '@bba/api-interfaces';

@Component({
  selector: 'bba-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user: User;
}
