import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.css']
})
export class NewRestaurantComponent implements OnInit {
  newRestaurant = {
    name: '',
    cuisine: '',
  }

  errors: string[] = [];

  constructor(
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
  }

  handleSubmit() {
    this._httpService.createRestaurant(this.newRestaurant)
      .subscribe((data: any) => {

        if (data.hasOwnProperty('errors')) {
          // this is only set up for the create controller method currently
          // see edit component to see easier way of doing it
          this.errors = data.errors;
        }
        else {
          this._router.navigate(['/restaurants']);
        }
      })
  }

  handleCancel() {
    this._router.navigate(['/restaurants']);
  }


}
