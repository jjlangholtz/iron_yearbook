var app = app || {};

app.ProfileView = Backbone.View.extend({
  tagName: 'div',
  className: 'profileContainer',
  template: $('#profileTemplate').html(),
  events: {
    'click .card': 'shrinkProfile'
  },
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  },
  shrinkProfile: function() {
    console.log('test');
    $('#profile').html('');
  }
});
