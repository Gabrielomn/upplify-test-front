import { Component, OnInit, Input } from '@angular/core';
import { Compra } from '../../dto/Compra'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() compras: Array<Compra>

  constructor() { }

  ngOnInit() {
  }

  getTotalValue(){
    return this.compras.reduce((sum, item) => sum + item.getValue(), 0)
  }

  confirmPurchase(){
    localStorage.clear()
    window.location.reload()
  }

  getCompras(){
    return this.compras
  }
}
