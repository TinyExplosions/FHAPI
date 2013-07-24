define([
    'underscore',
    'backbone',
    'models/TabBarModel',
    'text!templates/TabBarTemplate.html'
], function(_, Backbone, TabBarModel, TabBarTemplate){

    var TabBarView = Backbone.View.extend({
        el: $("nav.bar-tab"),
        model: new TabBarModel(),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
            this.model.bind('change', this.render);
        },

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, this.model.attributes );
            this.$el.html( compiledTemplate );
            return this;
        }
    });
    return TabBarView;

});