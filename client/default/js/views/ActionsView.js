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

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, {} );
            this.$el.html( compiledTemplate );
            return this;
        }
    });
    return ActionsView;

});