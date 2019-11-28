import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {Pipe, PipeTransform} from '@angular/core';



@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})


export class RestaurantComponent implements OnInit {
  thisRestaurant = null;
  

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

          this.thisRestaurant = data.restaurant;
          ;
        });
    });

}




}
