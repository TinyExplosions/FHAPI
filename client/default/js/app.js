// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router){
  var initialize = function(options){
    App.EventBus = new _.extend({}, Backbone.Events);
    
    App.router = new Router();
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
