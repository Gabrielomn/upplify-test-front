import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient:HttpClient) { }

  getCuisines(){
    return this.httpClient.get<Array<Object>>(`${environment.backendUrl}/food`)
  }

  getCuisinesByCategory(category:String){
    return this.httpClient.get<Array<Object>>(`${environment.backendUrl}/food/:${category}`)
  }
}
