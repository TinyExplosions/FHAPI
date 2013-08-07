// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'models/UserModel',
    'views/HeaderView',
    'views/TabBarView',
    'views/HomeView',
    'views/ActionsView',
    'views/AuthView',
    'views/SyncView',
    'views/WebViewView',
    'views/UserDetailView'
], function($, _, Backbone, UserModel, HeaderView, TabBarView, HomeView, ActionsView, AuthView, SyncView, WebViewView, UserDetailView) {

    var Router = Backbone.Router.extend({
        routes: {
            "": "home",
            "home": "home",
            "auth": "auth",
            "act": "act",
            "sync": "sync",
            "webview": "webView",
            "user": "addUser",
            "user/:userID": "userDetail"
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

        sync: function() {
            this.pageSelect("Sync");
            App.syncView = new SyncView().render();
        },

        webView: function() {
            this.pageSelect("WebView");
            var webViewView = new WebViewView().render();
        },

        pageSelect: function(page) {
            App.HeaderView.model.set("title",page);
            $(".tab-inner li").removeClass("active");
            $(".tab-inner #"+page).addClass("active");
        },

        userDetail: function(userID) {
            this.pageSelect("Sync");
            App.HeaderView.model.set("title","Edit User");
            var model = new UserModel({userID: userID});
            var remote = true;
            if(App.syncView) {
                model = App.syncView.userCollectionView.collection.get(userID);
                remote = false;
            }
            var userDetailView = new UserDetailView({model: model,remote:remote});
        },

        addUser: function() {
            this.pageSelect("Sync");
            App.HeaderView.model.set("title","Add User");
            var model = new UserModel();
            var userDetailView = new UserDetailView({model: model,remote:false});
        }
    });

    return Router;
});