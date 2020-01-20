import { Component, OnInit } from '@angular/core';
import { Compra } from '../../dto/Compra'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private compras:Array<Compra>
  constructor() { }

  ngOnInit() {
    this.compras = Object.values(localStorage).map((data) =>{
      let item = JSON.parse(data)
      return new Compra(item.title, item.price, item.amount)
    })
  }

  getCompras(){
    return this.compras
  }

  getTotalValue(){
    return this.compras.reduce((sum, item) => sum + item.getValue(), 0)

  }

  confirmPurchase(){
    localStorage.clear()
    this.ngOnInit()
  }
}
