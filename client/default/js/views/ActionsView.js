define([
    'underscore',
    'backbone',
    'text!templates/ActionsTemplate.html'
], function(_, Backbone, TabBarTemplate){

    var ActionsView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        events: {
            "click .fhAct": "fhAct",
            "click .mayAct": "mayAct"
        },

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, {} );
            this.$el.html( compiledTemplate );
            return this;
        },

        fhAct: function(evt) {
            evt.preventDefault();
            console.log("calling $fh.act");
            if(App.connnection.state !== "online") {
                console.log("$fh.act failed, we're not online");
                return;
            }
            $fh.act({
                act: "testAct",
                req: {}
            }, function(res){
                console.log("$fh.act successful",res);
            }, function(err){
                console.log("$fh.act failed",err);
            });
        },

        mayAct: function(evt) {
            evt.preventDefault();
            console.log("calling mayAct");
            App.ajaxManager.mayAct("testAct",{},
            function(res){
                console.log("mayAct successful",res);
            }, function(err){
                console.log("mayAct failed",err);
            });
        }
    });
    return ActionsView;

});