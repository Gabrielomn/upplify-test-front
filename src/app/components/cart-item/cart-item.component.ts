import { Component, OnInit, Input, Output } from '@angular/core';
import { Compra } from '../../dto/Compra'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() data: Compra
  public showMsg:boolean
  constructor() {
    this.showMsg = false;
  }

  ngOnInit() {
  }

  increase(){
    this.data.amount+= 1
    localStorage.setItem(this.data.title, JSON.stringify(this.data))
  }

  decrease(){
    if(this.data.amount > 1){
      this.data.amount-= 1
      localStorage.setItem(this.data.title, JSON.stringify(this.data))
    }else{
      localStorage.removeItem(this.data.title)
      this.showMsg = true
      setTimeout(() => {
        this.showMsg = false
      }, 2000);
      window.location.reload()
    }
  }

  getTotalValue(){
    return this.data.getValue()
  }
}
