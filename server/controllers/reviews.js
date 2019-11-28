const mongoose = require('mongoose');
const Review = mongoose.model('Review');
const Restaurant = mongoose.model('Restaurant');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {

  create(request, response) {
    Restaurant.findById(request.params.restaurantId)
      .then((restaurant) => {

        restaurant.reviews.push(new Review(request.body));

        restaurant.save()
          .then((updatedRestaurant) => {
            response.json({ restaurant: updatedRestaurant });
          })

          .catch((errors) => {
            response.json({ errors: errors });
          });

      })
  },




};