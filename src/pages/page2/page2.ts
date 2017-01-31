import { Component, Input } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

   peso: number;
   altura: number;
   imc: number;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.altura = this.altura;
    this.peso = this.peso;
  }

  calcImc():void {
    this.imc = this.peso / (this.altura * this.altura);
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.nav.push(Page2, {
      item: item
    });
  }
}
