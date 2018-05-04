import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import { NavController } from 'ionic-angular';

//import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = AboutPage;
  tab4Root = AboutPage;

  constructor(/*private nativePageTransitions: NativePageTransitions, public navCtrl: NavController*/) {

  }
    
    /*slidePage(){
        let options: NativeTransitionsOptions={
                directions: 'left',
                duration: 400,
                slowdownfactor: -1,
                iosdelay: 50
            };
        this.nativePageTransitions.slide(options);
    }*/
}
