import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { ListPage } from '../list/list';
import { DetailPage } from '../detail/detail';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToList() {
    this.navCtrl.push(ListPage);
  }

}
