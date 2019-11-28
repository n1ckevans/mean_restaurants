const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const ReviewSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      3,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  },
  rating: {
    type: Number,
    required: [true, "{PATH} is required."],
    min: [
      1,
      "{PATH} must be at least {MIN} stars."
    ],
    max: [
      5,
      "{PATH} must be at least {MAX} stars."
    ]
  },
  description: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      3,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  }
}, { timestamps: true });

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "{PATH} is required."],
    unique: [true, "Name already exists"],
    minlength: [
      3,
      "{PATH} must be at least {MINLENGTH} characters."
    ]
  },
  cuisine: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [
      3,
      "{PATH} must be greater than {MINLENGTH} characters."
    ]
  },
  reviews: [ReviewSchema]

}, { timestamps: true });

RestaurantSchema.plugin(uniqueValidator);

mongoose.model('Review', ReviewSchema);
mongoose.model('Restaurant', RestaurantSchema);