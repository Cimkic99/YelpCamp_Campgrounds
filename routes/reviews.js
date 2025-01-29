const express = require("express");
const router = express.Router({mergeParams: true});
const catchAsync = require("../utils/catchAsync");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware");
const ExpressError = require("../utils/ExpressError");
const Review = require("../models/review.js");
const Campground = require("../models/campground");
const reviews = require('../controllers/reviews.js')

router.post(
  "/",
  isLoggedIn,
  validateReview,
  catchAsync(reviews.createReview)
);

router.delete(
  "/:reviewId",
  isLoggedIn,
  catchAsync(reviews.deleteReview)
);

module.exports = router;