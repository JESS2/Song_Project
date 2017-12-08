import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  openAction() {
    let alert = this.alertCtrl.create({
      title: 'No.1',
      subTitle: '현재 4곡 남았습니다.',
      buttons: ['OK']
    });
    alert.present();
  }

  openAction2() {
    let alert = this.alertCtrl.create({
      title: 'No.2',
      subTitle: '현재 이용 가능합니다.',
      buttons: ['OK']
    });
    alert.present();
  }

  openAction4() {
    let alert = this.alertCtrl.create({
      title: 'No.4',
      subTitle: '현재 1곡 남았습니다.',
      buttons: ['OK']
    });
    alert.present();
  }
}
