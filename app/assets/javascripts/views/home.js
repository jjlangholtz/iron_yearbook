$(function(){
  $('.navigation').hide();
});

var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#start'),
  events: {
    'click': 'listStudents'
  },
  listStudents: function() {
    $('.mainWrap').hide();
    $('.navigation').show();
    app.cohortView = new app.CohortView();
  }
});
