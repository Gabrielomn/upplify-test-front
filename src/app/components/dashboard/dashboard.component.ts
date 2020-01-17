import { Component, OnInit } from '@angular/core';
import { FoodService }  from '../../services/food.service'
import { Item } from '../../dto/Item'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private cuisines: Array<Item>
  public query:string
  constructor(private foodService:FoodService) {
    this.cuisines = []
  }

  ngOnInit() {
    this.foodService.getCuisines().subscribe((data: any) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine))
    })
  }

  getCuisines(){
    return this.cuisines
  }

  searchForKeyword(){
    //todo
  }
}
