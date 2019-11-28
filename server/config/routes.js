const restaurantsController = require('../controllers/restaurants');
const reviewsController = require('../controllers/reviews');

module.exports = function (app) {
  app.get('/api/restaurants', restaurantsController.all);
  app.get('/api/restaurants/:id', restaurantsController.getOne);
  app.get('/api/restaurants/:id/review', restaurantsController.reviewOne);
  app.post('/api/restaurants', restaurantsController.create);
  app.delete('/api/restaurants/:id', restaurantsController.delete);
  app.put('/api/restaurants/:id/edit', restaurantsController.update);

  app.post('/api/reviews/:restaurantId/review', reviewsController.create)
}