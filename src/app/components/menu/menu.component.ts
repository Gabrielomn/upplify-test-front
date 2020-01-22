import { Component, OnInit } from '@angular/core';
import { FoodService }  from '../../services/food.service'
import { Item } from '../../dto/Item'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private cuisines: Array<Item>
  private options: Array<string>
  public query:string
  private delaySearch: any
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
    this.searchForKeyword()
  }

  getCuisines(){
    return this.cuisines
  }

  getOptions(){
    return this.options
  }

  searchForKeyword(){
    this.foodService.getCuisinesBySubstring(this.query).subscribe((data) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine, item.imageLink))
    })
  }

  searchForKeywordOnDelay(){
    clearTimeout(this.delaySearch)
    this.delaySearch = setTimeout(this.searchForKeyword.bind(this), 1200);
  }

  searchForKeywordWithoutDelay(){
    clearTimeout(this.delaySearch)
    this.searchForKeyword()
    this.query = ""
  }

  searchByCategory(category:string){
    this.foodService.getCuisinesByCategory(category).subscribe((data) => {
      this.cuisines = data.map((item) => new Item(item.id, item.title, item.price, item.cuisine, item.imageLink))
    })
  }
}
