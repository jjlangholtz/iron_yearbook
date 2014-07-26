var app = app || {};

app.Cohort = Backbone.Collection.extend({
  model: app.Student,
  url: '/api/v1/students'
});
