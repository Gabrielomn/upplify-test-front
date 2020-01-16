import { Component, OnInit } from '@angular/core';
import { FoodService }  from '../../services/food.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private foodService:FoodService) { }
  state = {
    cuisines: []
  }
  ngOnInit() {
    this.foodService.getCuisines().subscribe((data) => {
      this.state.cuisines = data
    })
  }

}
