import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapPage } from '../map/map';
import { SetupPage } from '../setup/setup';
import { PuzzleTaskPage } from '../puzzle-task/puzzle-task';
import { PhotoTaskPage } from '../photo-task/photo-task';

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  

  gotoMap(){
    this.navCtrl.push(MapPage);
  }
  gotoPuzzleTask(){
    this.navCtrl.push(PuzzleTaskPage);
  }
  gotoPhotoTask(){
    this.navCtrl.push(PhotoTaskPage);
  }

}
