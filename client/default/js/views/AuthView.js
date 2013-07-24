define([
    'underscore',
    'backbone',
    'hammer',
    'text!templates/AuthTemplate.html',
    'text!templates/LoginSuccessTemplate.html'
], function(_, Backbone, Hammer, TabBarTemplate, LoginSuccessTemplate){

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
                userId: $("#username").val(),
                password: $("#password").val()
            };
            this.tryAuth(params);
            return false;
        },

        tryAuth: function(params) {
            var self = this;
            var $error = $(".error");
            if($error.length > 0) {
                $error.remove();
            }
            var clientToken = $fh.app_props.appid;
            $fh.auth({
                "policyId": "API_Test",
                "clientToken": clientToken,
                "params": params
                }, function(res) {
                    self.loginSuccess(res);
                    console.log("OK?",res);
                }, function(msg, err) {
                    $("#loginout form").prepend('<p class="error">Authentication failed, please try again</p>');
                    console.log("Err?",msg,res);

                });
        },

        loginSuccess: function(res) {
            if(!res.userId) {
                res.userId = "localUser";
            }
            var compiledTemplate = _.template( LoginSuccessTemplate, res );
            $("#loginout").html( compiledTemplate );
        }
    });
    return AuthView;

});