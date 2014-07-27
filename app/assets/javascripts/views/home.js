$(function(){
  $('.topNav').hide();
});

var app = app || {};

app.HomeView = Backbone.View.extend({
  el: $('#start'),
  events: {
    'click': 'listStudents'
  },
  listStudents: function() {
    $('.mainWrap').hide();
    $('.topNav').show();
    var cohortView = new app.CohortView();
  }
});
