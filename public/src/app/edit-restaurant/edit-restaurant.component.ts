import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  restaurantToEdit = null;
  errorMsg: string = '';

  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this._activeRoute.params
      .subscribe((params: Params) => {

        this._httpService.getRestaurant(params.id)
          .subscribe((data: any) => {

            this.restaurantToEdit = data.restaurant;
          });
      });
  }

  handleSubmit() {
    this._httpService.updateRestaurant(this.restaurantToEdit._id, this.restaurantToEdit)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          console.log(data.errors);

          this.errorMsg = data.errors.message;
        }
        else {
          this._router.navigate(['/restaurants']);
        }
      });
  }

  handleCancel() {
    this._router.navigate(['/restaurants']);
  }


}
