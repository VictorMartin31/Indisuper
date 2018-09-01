import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    
  
}

Ingresar() {
  //this.router.navigate(['PublicPage']);
}


}
