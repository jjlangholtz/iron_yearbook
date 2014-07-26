var app = app || {};

app.CohortView = Backbone.View.extend({
  el: $('#students'),
  initialize: function() {
    this.collection = new app.Cohort();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderStudent);
    this.listenTo(this.collection, 'reset', this.render);
  },
  render: function() {
    this.$el.append("<h1>Student List</h1>");
    this.collection.each(function(student) {
      this.renderStudent(student);
    }, this);
  },
  renderStudent: function(student) {
    var studentView = new app.StudentView({
      model: student
    });
    this.$el.append(studentView.render().el);
  }
});
