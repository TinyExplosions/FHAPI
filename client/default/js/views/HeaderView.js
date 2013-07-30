define([
    'underscore',
    'backbone',
    'models/HeaderModel',
    'text!templates/HeaderTemplate.html'
], function(_, Backbone, HeaderModel, HeaderTemplate){

    var HeaderView = Backbone.View.extend({
        el: $("header.bar-title"),
        model: new HeaderModel(),

        events: {
            'click .toggleConnection': 'toggleConnection'
        },

        initialize: function(options) {
            this.render = _.bind(this.render, this);
            this.model.bind('change', this.render);
        },

        render: function() {
            var compiledTemplate = _.template( HeaderTemplate, this.model.attributes );
            this.$el.html( compiledTemplate );
            return this;
        },

        toggleConnection: function(evt) {
            evt.preventDefault();
            if(App.connnection.state === "online") {
                App.connnection.goOffline();
            } else {
                App.connnection.goOnline();
            }
        }
    });
    return HeaderView;

});