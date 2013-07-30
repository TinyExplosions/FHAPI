// Filename: utils.js
define([
    'backbone',
    'connectivityFsm',
    'actManagementFSM',
    'stethoscope',
    'sync',
    'views/AlertView',
    'models/AlertModel'
], function(Backbone, ConnectivityFsm, ActManagementFsm, Stethoscope, Sync, AlertView,AlertModel){

    var initialize = function(options){
        var self = this;
        var stethoscope = new Stethoscope( { url : "heartbeat" } );
        App.connnection = new ConnectivityFsm( { stethoscope: stethoscope } );
        App.connnection.goOnline();
        App.ajaxManager = new ActManagementFsm({
            httpConnectivityFsm: App.connnection
        });
        App.connnection.on("transition", _transition, this);
    };

    var _transition = function(data) {
        $("body").removeClass("offline");
        console.log("Transitioning",data.toState);
        if(data.toState === "offline") {
            $("body").addClass("offline");
        }
        if(data.toState === "noCloud") {
            var alertModel = new AlertModel({title: "No Cloud"});
            App.AlertView = new AlertView({model:alertModel});
        }
    };

  return {
    initialize: initialize
  };
});