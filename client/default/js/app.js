// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router',
  'utils'
], function($, _, Backbone, Router, Utils){
  var initialize = function(options){
    App.EventBus = new _.extend({}, Backbone.Events);
    Utils.initialize();

    App.router = new Router();
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
