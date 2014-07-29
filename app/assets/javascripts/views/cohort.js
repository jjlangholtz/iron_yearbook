var app = app || {};

app.CohortView = Backbone.View.extend({
  el: $('#students'),
  initialize: function() {
    this.collection = new app.Cohort();
    this.collection.fetch();
    this.render();
    this.listenTo(this.collection, 'add', this.renderStudent);
    this.listenTo(this.collection, 'reset', this.render);
    this.listenTo(this.collection, 'remove', console.log('models removed'));
  },
  events: {
    'click .hover-tile-outer': 'studentDetails',
    'click #ror': 'filterRor',
  },
  render: function() {
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
  studentDetails: function(e) {
    var studentID = e.currentTarget.id
    app.StudentRouter.navigate('students/' + studentID, {trigger: true});
  },
  filterRor: function(e) {
    e.preventDefault();
  }
});
