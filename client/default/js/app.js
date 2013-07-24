// Filename: app.js
define([
  'jquery',
  'underscore',
  'backbone',
  'router'
], function($, _, Backbone, Router){
  var initialize = function(options){
    App.EventBus = new _.extend({}, Backbone.Events);
    // //init session info -maybe draw from localstorage eventually (or a model could work nicely!)
    // App.Session = {};
    // App.offlineStore = new OfflineStore("FH-AerLingus");
    // Utils.initialize();
    console.log("new router?");
    App.router = new Router();
    Backbone.history.start();
  };

  return {
    initialize: initialize
  };
});
