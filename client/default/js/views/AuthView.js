define([
    'underscore',
    'backbone',
    'hammer',
    'text!templates/AuthTemplate.html'
], function(_, Backbone, Hammer, TabBarTemplate){

    var AuthView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        events: {
            'tap form a': 'formSubmit',
            'submit': 'formSubmit'

        },

        render: function() {
            var compiledTemplate = _.template( TabBarTemplate, {} );
            this.$el.html( compiledTemplate );
            this.$el.hammer();
            return this;
        },

        formSubmit: function() {
            console.log("submitting?");
            var params = {
                username: $("#username").val(),
                password: $("#password").val()
            };
            this.tryAuth(params);
            return false;
        },

        tryAuth: function(params) {
            var clientToken = $fh.app_props.appid;
            $fh.auth({
                "policyId": "API_Test",
                "clientToken": clientToken,
                "params": params
                }, function(res) {
                    alert("Logged In!");
                    console.log("OK?",res);

                }, function(msg, err) {
                    alert("Not Logged In ;(");
                    console.log("Err?",msg,res);

                });
        }
    });
    return AuthView;

});