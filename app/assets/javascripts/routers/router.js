var app = app || {};

var StudentRouter = Backbone.Router.extend({
  initialize: function() {
    this.collection = new app.Cohort();
    this.collection.fetch();
  },
  routes: {
    'students/:id': 'studentDetails'
  },
  studentDetails: function(id) {
    $('#students').hide();
    var student = this.collection.get(id);
    this.profileView = new app.ProfileView({model: student});
    $('#profile').html(this.profileView.render().el);
  }
});

app.StudentRouter = new StudentRouter();
Backbone.history.start();
