// Filename: utils.js
define([
    'backbone',
    'connectivityFsm',
    'actManagementFsm',
    'stethoscope',
    'sync'
], function(Backbone, ConnectivityFsm, ActManagementFsm, Stethoscope, Sync){

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
        if(data.toState !== "online") {
            $("body").addClass("offline");
        }
    };

  return {
    initialize: initialize
  };
});
