define([
    'underscore',
    'backbone',
    'hammer',
    'text!templates/AuthTemplate.html',
    'text!templates/AuthFormTemplate.html',
    'text!templates/LoginSuccessTemplate.html'
], function(_, Backbone, Hammer, AuthTemplate, AuthFormTemplate, LoginSuccessTemplate){

    var AuthView = Backbone.View.extend({
        el: $(".content"),

        initialize: function(options) {
            this.render = _.bind(this.render, this);
        },

        events: {
            'tap a.login': 'formSubmit',
            'submit': 'formSubmit',
            'tap a.logout': 'logout'

        },

        render: function() {
            var compiledTemplate = _.template( AuthTemplate, {} );
            this.$el.html( compiledTemplate );
            if(!App.SessionToken) {
                compiledTemplate = _.template( AuthFormTemplate, {} );
                $("#loginout").html( compiledTemplate );
            } else {
                compiledTemplate = _.template( LoginSuccessTemplate, {userId: App.UserId} );
                $("#loginout").html( compiledTemplate );
            }
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
            $("#loginout a").text("Logging In...");
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
                    $("#loginout a").text("Login!");
                    $("#loginout form").prepend('<p class="error">Authentication failed, please try again</p>');
                    console.log("Err?",msg,res);

                });
        },

        loginSuccess: function(res) {
            if(!res.userId) {
                res.userId = "localUser";
                res.sessionToken = "localToken";
            }
            App.SessionToken = res.sessionToken;
            App.UserId = res.userId;
            this.render();
        },

        logout: function() {
            App.SessionToken = null;
            App.UserId = null;
            this.render();
        }
    });
    return AuthView;

});