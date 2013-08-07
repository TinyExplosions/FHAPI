define([
    'underscore',
    'backbone',
    'text!templates/UserListTemplate.html'
], function(_, Backbone, UserListTemplate){

    var UserListView = Backbone.View.extend({
        className : "image",

        initialize : function(options) {
            this.render = _.bind(this.render, this);
            this.model.bind('change', this.render);
        },

        render : function() {
            // console.log('rendering',this.model);
            // this.el.innerHTML = this.model.get('fullName');

            var compiledTemplate = _.template( UserListTemplate, this.model.attributes );
            this.$el.html( compiledTemplate );

            return this;
        }
    });
    return UserListView;

});