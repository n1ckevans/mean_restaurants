import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private _http: HttpClient
  ) { }


  getRestaurants() {
    // longform
    const observable = this._http.get('/api/restaurants');
    return observable;
  }

  getRestaurant(id) {
    return this._http.get('/api/restaurants/' + id);
  }

  createRestaurant(newRestaurant) {
    return this._http.post('/api/restaurants', newRestaurant);
  }

  updateRestaurant(id, editedRestaurant) {
    return this._http.put('/api/restaurants/' + id + '/edit/', editedRestaurant);
  }

  deleteRestaurant(id) {
    return this._http.delete('/api/restaurants/' + id);
  }

  viewRestaurant(id) {
    return this._http.delete('/api/restaurants/' + id);
  }

  createReview(newReview, restaurantId){
    return this._http.post('/api/reviews/' + restaurantId + '/review/', newReview)
  }
}