// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/HeaderView',
    'views/TabBarView',
    'views/ActionsView',
    'views/AuthView'
], function($, _, Backbone, HeaderView, TabBarView, ActionsView, AuthView) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "home": "home",
            "auth": "auth",
            "act": "act",
            "db": "db"
        },

        initialize: function(options) {
            App.HeaderView = new HeaderView();
            App.TabBarView = new TabBarView().render();
        },

        home: function() {
            this.pageSelect("Home");
        },

        auth: function() {
            this.pageSelect("Authentication");
            var authView = new AuthView().render();
        },

        act: function() {
            this.pageSelect("Actions");
            var actionsView = new ActionsView().render();
        },

        db: function() {
            this.pageSelect("Database");
        },

        pageSelect: function(page) {
            App.HeaderView.model.set("title",page);
            $(".tab-inner li").removeClass("active");
            $(".tab-inner #"+page).addClass("active");
        }
    });

    return Router;
});