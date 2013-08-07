define([
    'underscore',
    'backbone',
    'views/UsersCollectionView',
    'text!templates/SyncTemplate.html'
], function(_, Backbone, UsersCollectionView, SyncTemplate){

    var SyncView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        render: function() {
            var compiledTemplate = _.template( SyncTemplate, {} );
            this.$el.html( compiledTemplate );
            this.userCollectionView = new UsersCollectionView({el:".userCollectionList"}).render();
            return this;
        }

    });
    return SyncView;

});