define([
    'underscore',
    'backbone',
    'text!templates/HomeTemplate.html'
], function(_, Backbone, TabBarTemplate){

    var HomeView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        events: {
            "click button": "onClick"
        },

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, {} );
            this.$el.html( compiledTemplate );
            return this;
        },

        onClick: function() {
            console.log("Calling May Act");
            App.ajaxManager.mayAct("testAct",
                {
                        foo: "bar"
                }, function(res){
                    console.log("Returned From Server");
                }, function(err){
                    console.log("WAT!?");
                }
            );

        }
    });
    return HomeView;

});