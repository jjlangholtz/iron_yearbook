/* global Backbone */
var app = app || {};

(function () {
  'use strict';

  var StudentRouter = Backbone.Router.extend({});

  app.StudentRouter = new StudentRouter();
  Backbone.history.start();
})();
