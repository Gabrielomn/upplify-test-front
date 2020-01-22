import { Component, OnInit, Input } from '@angular/core';
import { Compra } from '../../dto/Compra'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  @Input() compras: Array<Compra>
  public showMsg:boolean
  constructor() { }

  ngOnInit() {
  }

  getTotalValue(){
    return this.compras.reduce((sum, item) => sum + item.getValue(), 0)
  }

  confirmPurchase(){
    localStorage.clear()
    this.showMsg = true
    setTimeout(() => {
      this.showMsg = false
      window.location.reload()
    }, 2000);
  }


  getCompras(){
    return this.compras
  }
}
