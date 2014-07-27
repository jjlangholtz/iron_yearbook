var app = app || {};

app.CohortView = Backbone.View.extend({
  el: $('#students'),
  initialize: function() {
    this.collection = new app.Cohort();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderStudent);
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'filter', this.filterAll);
  },
  render: function() {
    this.$el.append('<a href="/#ror">Ruby on Rails</a>');
    this.$el.append('<a href="/#fee">Front End Engineering</a>');
    this.collection.each(function(student) {
      this.renderStudent(student);
    }, this);
  },
  renderStudent: function(student) {
    var studentView = new app.StudentView({
      model: student
    });
    this.$el.append(studentView.render().el);
  },
  filterAll: function() {
    this.collection.each(this.filterOne, this);
  },
  filterOne: function() {
    student.trigger('visible');
  }
});
