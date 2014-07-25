/* global Backbone, jQuery, _, */
var app = app || {};

(function ($) {
  'use strict';

  app.AppView = Backbone.View.extend({

    el: '#studentapp',

    initialize: function () {
      this.$main = this.$('#main');
    },

    render: function () {
      this.$main.show();
    }
  });
})(jQuery);
