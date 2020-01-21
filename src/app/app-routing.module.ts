import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component'

import { CartComponent } from './components/cart/cart.component'
const routes: Routes = [
  { path:'',component:MenuComponent },
  { path:'cart',component:CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
