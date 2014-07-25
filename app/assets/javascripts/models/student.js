/* global Backbone */
var app = app || {};

(function () {
  'use strict';

  app.Student = Backbone.Model.extend({
    defaults: {
      title: '',
      twitter: ''
    },

    urlRoot: '/api/v1/students'
  });
})();
