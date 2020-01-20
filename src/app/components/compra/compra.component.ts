import { Component, OnInit, Input, Output } from '@angular/core';
import { Compra } from '../../dto/Compra'
@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

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
    return this.data.getValue().toFixed(2)
  }
}
