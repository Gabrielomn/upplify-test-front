import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../dto/Item'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() data: Item
  public showMsg:boolean
  public showMsgFail:boolean
  constructor() {
    this.showMsg= false
    this.showMsgFail= false
  }

  ngOnInit() {
  }

  addToCart(){
    if(!localStorage.getItem(this.data.title)){
      localStorage.setItem(this.data.title, JSON.stringify({title:this.data.title, price:this.data.price, amount:1}))
      this.showMsg = true
      setTimeout(() => {
        this.showMsg = false
      }, 2000);
    }else if(!this.showMsg){
      this.showMsgFail = true
      setTimeout(() => {
        this.showMsgFail = false
      }, 2000);
    }
  }
}

