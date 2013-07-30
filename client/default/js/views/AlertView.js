define([
    'underscore',
    'backbone',
    'models/AlertModel',
    'text!templates/AlertTemplate.html'
], function(_, Backbone, AlertModel, AlertTemplate){

    var ActionsView = Backbone.View.extend({
        el: $(".alert"),
        model: new AlertModel(),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
            this.render();
        },

        events: {
            'click .button-alert': 'close'
        },

        render: function() {
            var compiledTemplate = _.template( AlertTemplate, this.model.attributes );
            this.$el.html( compiledTemplate );
            var offset = this.$el.height() / 2;
            this.$el.css("margin-top","-"+offset+"px");
            this.$el.addClass("show");
            return this;
        },

        close: function() {
            this.$el.removeClass("show");
        }
    });
    return ActionsView;

});