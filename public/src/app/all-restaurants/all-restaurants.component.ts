import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-restaurants',
  templateUrl: './all-restaurants.component.html',
  styleUrls: ['./all-restaurants.component.css']
})
export class AllRestaurantsComponent implements OnInit {
  restaurants: any[] = [];

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._httpService.getRestaurants()
      .subscribe((data: any) => {
        this.restaurants = data.restaurants;
        console.log(this.restaurants);
      });
  }

  editRestaurant(restaurantId: string) {
    this._router.navigate(['restaurants/' + restaurantId + '/edit/']);
  }

  deleteRestaurant(restaurantId: string) {
    this._httpService.deleteRestaurant(restaurantId)
      .subscribe((data: any) => {

        for (let i = 0; i < this.restaurants.length; i++) {
          if (this.restaurants[i]._id === restaurantId) {
            return this.restaurants.splice(i, 1);
          }
        }
      });
  }

  viewRestaurant(restaurantId: string) {
    this._router.navigate(['restaurants/' + restaurantId]);
  }



}
