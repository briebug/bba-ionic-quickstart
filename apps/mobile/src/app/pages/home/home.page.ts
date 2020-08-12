import { Component } from '@angular/core';
import { UsersFacade } from '@bba/core-state';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'bba-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  user$ = this.usersFacade.selectedUser$;

  constructor(
    private usersFacade: UsersFacade,
    private loadingCtrl: LoadingController
  ) {}

  async shareToSocial(network) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
  }
}
