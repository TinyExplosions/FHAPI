define([
    'underscore',
    'backbone',
    'text!templates/DatabaseTemplate.html'
], function(_, Backbone, TabBarTemplate){

    var DbView = Backbone.View.extend({
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
    return DbView;

});