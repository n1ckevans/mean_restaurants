import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { ReviewComponent } from './review/review.component';
import { RestaurantComponent } from './restaurant/restaurant.component';




const routes: Routes = [
  {
    path: 'restaurants',
    component: AllRestaurantsComponent
  },
  {
    path: 'restaurants/new',
    component: NewRestaurantComponent
  },
  {
    path: 'restaurants/:id/edit',
    component: EditRestaurantComponent
  },
  {
    path: 'restaurants/:id',
    component: RestaurantComponent
  },

  {
    path: 'restaurants/:id/review',
    component: ReviewComponent
  },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }