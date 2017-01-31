import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

   weight: number;
   height: number;
   imc: any;
   name: string;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.height = this.height;
    this.weight = this.weight;
  }

  calcImc():void {

    this.imc = this.weight / (this.height * this.height);
    this.imc.toFixed(2);
    if(this.imc <= 18.5 ){
      this.name = "Você está baixo do peso com esse IMC";
    }else if(this.imc <= 24.9){
      this.name = "Seu peso é ideal com esse IMC"
    }else if(this.imc <= 29.9){
      this.name = "Você está levemento acima do seu peso com esse IMC";
    }else if(this.imc <= 34.9){
      this.name = "Você está com Obesidade grau I com esse IMC"
    }else if(this.imc <= 39.9){
      this.name = "Você está com Obesidade grau II (Severa) com esse IMC: "
    }else{
      this.name = "Você está com Obesidade III (Móbida) com esse IMC: "
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.nav.push(Page2, {
      item: item
    });
  }
}
