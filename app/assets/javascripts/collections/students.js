/* global Backbone */
var app = app || {};

(function () {
  'use strict';

  var Students = Backbone.Collection.extend({
    model: app.Student,

    url: 'api/v1/students',
  });

  app.students = new Students();
})();
