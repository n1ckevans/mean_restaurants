import { Component, OnInit, Input} from '@angular/core';
import { HttpService } from '../http.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  thisRestaurant = null;


newReview: any = {
  customer: '',
  rating: '',
  description: '',
};

errors: string = '';

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
          console.log(this.thisRestaurant);
        });
    });
  }

  addReview() {
    this._httpService.createReview(this.newReview, this.thisRestaurant._id)
    
    .subscribe((data: any) => {
      console.log(this.newReview);
      if (data.hasOwnProperty('errors')) {
        this.errors = data.errors.message;
      }
      else {
        // replace the passengers array with the updated rides pasengers
        // so that this component will detect a change and re-render
        // to display the new passenger
        this.thisRestaurant.reviews = data.restaurant.reviews;
        this.thisRestaurant.reviews.push(this.newReview);
        this.newReview.customer = '';
        this.newReview.rating = '';
        this.newReview.description = '';
        this._router.navigate(['restaurants/' + this.thisRestaurant._id]);

      }
    });
  }

  

  handleCancel() {
    this._router.navigate(['restaurants/' + this.thisRestaurant._id]);
  }

}
