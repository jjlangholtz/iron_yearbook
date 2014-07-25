/* global Backbone, jQuery, _ */
var app = app || {};

(function ($) {
  'use strict';

  app.StudentView = Backbone.View.extend({

    tagName: 'li',

    template: _.template($('#student-template').html()

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }

  });
})(jQuery);
