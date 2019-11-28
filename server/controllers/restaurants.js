const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
const { flattenErrorsToArr } = require('../../helpers');

module.exports = {
  all(request, response) {
    // find all
    Restaurant.find()
      .then((restaurants) => {
        response.json({ restaurants: restaurants });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Restaurant.findById(request.params.id)
      .then((restaurant) => {
        response.json({ restaurant: restaurant });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  reviewOne(request, response) {
    Restaurant.findById(request.params.id)
      .then((restaurant) => {
        response.json({ restaurant: restaurant });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Restaurant.create(request.body)
      .then((newRestaurant) => {
        response.json({ restaurant: newRestaurant });
      })
      .catch((errors) => {
        response.json({ errors: flattenErrorsToArr(errors) });
      });
  },

  delete(request, response) {
    Restaurant.findByIdAndDelete(request.params.id)
      .then((deletedRestaurant) => {
        response.json({ restaurant: deletedRestaurant });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Restaurant.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedRestaurant) => {
        response.json({ restaurant: updatedRestaurant });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}