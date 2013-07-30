// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/HeaderView',
    'views/TabBarView',
    'views/HomeView',
    'views/ActionsView',
    'views/AuthView',
    'views/DbView',
    'views/WebViewView'
], function($, _, Backbone, HeaderView, TabBarView, HomeView, ActionsView, AuthView, DbView, WebViewView) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "home": "home",
            "auth": "auth",
            "act": "act",
            "db": "db",
            "webview": "webView"
        },

        initialize: function(options) {
            App.HeaderView = new HeaderView();
            App.TabBarView = new TabBarView().render();
        },

        home: function() {
            this.pageSelect("Home");
            var homeView = new HomeView().render();
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
            var dbView = new DbView().render();
        },

        webView: function() {
            this.pageSelect("WebView");
            var webViewView = new WebViewView().render();
        },

        pageSelect: function(page) {
            App.HeaderView.model.set("title",page);
            $(".tab-inner li").removeClass("active");
            $(".tab-inner #"+page).addClass("active");
        }
    });

    return Router;
});