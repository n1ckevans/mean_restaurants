import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { AllRestaurantsComponent } from './all-restaurants/all-restaurants.component';
import { NewRestaurantComponent } from './new-restaurant/new-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { ReviewComponent } from './review/review.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { OrderByPipe } from './order-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AllRestaurantsComponent,
    NewRestaurantComponent,
    EditRestaurantComponent,
    ReviewComponent,
    RestaurantComponent,
    OrderByPipe,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    // HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }