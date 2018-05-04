import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    point: any;
    users: any;
   
    constructor(public navCtrl: NavController, private dataProvider: DataProvider, private screenOrientation: ScreenOrientation) {
        //this.lockScreenOrientation();
        this.getUsers();
        
    }
    
    
     /*lockScreenOrientation(){
         console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'

        try{
           this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }catch(error){
            console.log(error);
        }
    }
    */
    
    
    getUsers() {
    this.dataProvider.getUsers()
    .then(data => {
      this.users = data.business;
      this.points=data.rewardPoints;
      console.log(this.users);
      console.log(this.points);
        console.log(data);
        
    })
  };
    
 
}
