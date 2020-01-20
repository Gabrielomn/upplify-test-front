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
  private options: Array<string>
  public query:string
  constructor(private foodService:FoodService) {
    this.cuisines = []
    this.options = [
      "salad",
      "burgers",
      "pizza",
      "chinese",
      "beverage"
    ]
    this.query=""
  }

  ngOnInit() {
    this.searchAll()
  }

  getCuisines(){
    return this.cuisines
  }

  getOptions(){
    return this.options
  }

  searchAll(){
    this.foodService.getCuisines().subscribe((data) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine))
    })
  }

  searchForKeyword(){
    this.foodService.getCuisinesBySubstring(this.query).subscribe((data) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine))
    })
    this.query=""
  }

  searchByCategory(category:string){
    this.foodService.getCuisinesByCategory(category).subscribe((data) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine))
    })
  }
}
