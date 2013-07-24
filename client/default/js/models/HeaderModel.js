define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var HeaderModel = Backbone.Model.extend({
    // We can pass it default values.
    defaults : {
        title: "Header"
    }
  });
  return HeaderModel;
});