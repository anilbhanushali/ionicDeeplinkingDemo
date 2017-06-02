import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name:'Detail', //Default page name is the classname. this will override it.,
  defaultHistory:['HomePage','ListPage'],
  segment:'detail/:id'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  params:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

}
