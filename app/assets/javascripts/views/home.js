var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#start'),
  events: {
    'click': 'listStudents'
  },
  listStudents: function() {
    $('.mainWrap').hide();
    var cohortView = new app.CohortView();
  }
});
