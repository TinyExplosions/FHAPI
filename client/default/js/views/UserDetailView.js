define([
    'underscore',
    'backbone',
    'text!templates/UserDetailTemplate.html',
    'views/AlertView',
    'models/AlertModel'
], function(_, Backbone, UserDetailTemplate, AlertView, AlertModel){

    var UserDetailView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
            this.model.bind('change', this.render);
            if(options.remote) {
                this.model.fetch();
            } else {
                this.render();
            }
        },

        events: {
            'click .saveUser': 'saveUser'
        },

        render: function() {
            var compiledTemplate = _.template( UserDetailTemplate, this.model.attributes );
            this.$el.html( compiledTemplate );
            return this;
        },

        saveUser: function(evt) {
            evt.preventDefault();
            console.log("saving user");
            for (var i = 0; i < $("form input").length; i++) {
                var $input = $("form input")[i];
                this.model.set($input.id,$input.value);
            }
            this.model.save({}, {
                success: function(){
                    var alertModel = new AlertModel({title: "User Saved",text: "User Saved Successfully",buttons: [{title: "OK",class: "userSaved"}]});
                    App.AlertView = new AlertView({model:alertModel});
                }
            });
        }
    });
    return UserDetailView;

});