define([
    'underscore',
    'backbone',
    'text!templates/HomeTemplate.html'
], function(_, Backbone, TabBarTemplate){

    var HomeView = Backbone.View.extend({
        el: $(".content"),

        events: {
            "click .momentCloud": "momentCloud"
        },

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, {} );
            this.$el.html( compiledTemplate );
            $(".momentOutput").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
            return this;
        },

        momentCloud: function(evt) {
            evt.preventDefault();
            $fh.act({
                act: "testMoment",
                req: {}
            }, function(res){
                console.log(res);
                 $(".momentCloudOutput").text(res.success);
            }, function(err){
                console.log(err);
            });
        }
    });
    return HomeView;

});