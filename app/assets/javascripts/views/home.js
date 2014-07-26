var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#start'),
  events: {
    'click': 'listStudents'
  },
  listStudents: function() {
    this.$el.hide();
    var cohortView = new app.CohortView();
  }
});
