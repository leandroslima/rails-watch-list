// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller.js"
application.register("hello", HelloController)

import StarRatingController from "./star_rating_controller.js"
application.register("star-rating", StarRatingController)

import TomSelectController from "./tom_select_controller.js"
application.register("tom-select", TomSelectController)
