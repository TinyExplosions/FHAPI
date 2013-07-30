define([
  'underscore',
  'backbone'
], function(_, Backbone) {
  var AlertModel = Backbone.Model.extend({
    // We can pass it default values.
    defaults : {
        title: "Alert",
        text: "We Appear to have no connection to the Cloud, but are connected to a network. Please Contact an Administrator",
        buttons: [
            {
                title: "Cancel",
                class: "cancelBtn"
            },
            {
                title: "OK",
                class: "okBtn"
            }
        ]
    }
  });
  return AlertModel;
});