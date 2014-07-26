var app = app || {};

app.StudentView = Backbone.View.extend({
  tagName: 'div',
  className: 'studentContainer',
  template: $('#studentTemplate').html(),
  render: function() {
    var tmpl = _.template(this.template);
    this.$el.html(tmpl(this.model.toJSON()));
    return this;
  }
});
